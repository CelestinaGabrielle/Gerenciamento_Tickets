export default async function handler(req, res) {
  const GITLAB_API_URL = "https://git.tcm.go/api/v4";
  const TOKEN = process.env.GITLAB_ACCESS_TOKEN;

  console.log("Token:", TOKEN); 

  if (!TOKEN) {
    return res.status(400).json({ error: 'Token de acesso não encontrado.' });
  }

  try {
    console.log("Buscando projetos...");
    const projectsResponse = await fetch(`${GITLAB_API_URL}/projects`, {
      headers: {
        "Private-Token": TOKEN,
      },
    });

    if (!projectsResponse.ok) {
      throw new Error(`Erro ao buscar projetos: ${projectsResponse.statusText}`);
    }

    const projects = await projectsResponse.json();
    console.log("Projetos encontrados:", projects.length); // Log do número de projetos

    const issuesPromises = projects.map(async (project) => {
      console.log(`Buscando issues para o projeto ${project.name}...`);
      const issuesResponse = await fetch(
        `${GITLAB_API_URL}/projects/${project.id}/issues?state=closed`,
        {
          headers: {
            "Private-Token": TOKEN,
          },
        }
      );

      if (!issuesResponse.ok) {
        console.error(`Erro ao buscar issues para o projeto ${project.name}: ${issuesResponse.statusText}`);
        return [];
      }

      const issues = await issuesResponse.json();
      console.log(`Issues encontradas para o projeto ${project.name}:`, issues.length); // Log do número de issues

      return issues.map((issue) => ({
        project_id: project.id,
        project_name: project.name,
        issue_id: issue.id,
        issue_title: issue.title,
        issue_number: issue.iid,
      }));
    });

    const allIssues = await Promise.all(issuesPromises);
    const formattedIssues = allIssues.flat();

    return res.status(200).json(formattedIssues);
  } catch (error) {
    console.error("Erro interno:", error.message);
    return res.status(500).json({ error: error.message });
  }
}