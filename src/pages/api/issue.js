export default async function handler(req, res) {
  const GITLAB_API_URL = "https://git.tcm.go/api/v4";
  const TOKEN = process.env.GITLAB_ACCESS_TOKEN;

  // Desativa a verificação de certificado SSL (apenas para desenvolvimento)
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  console.log("Token:", TOKEN);

  if (!TOKEN) {
    return res.status(400).json({ error: 'Token de acesso não encontrado.' });
  }

  try {
    console.log("Buscando projetos...");
    let page = 1;
    let allProjects = [];

    // Busca projetos com paginação
    while (true) {
      const projectsResponse = await fetch(`${GITLAB_API_URL}/projects?page=${page}&per_page=100`, {
        headers: {
          "Private-Token": TOKEN,
        },
      });

      if (!projectsResponse.ok) {
        const errorBody = await projectsResponse.text();
        console.error(`Erro ao buscar projetos: ${projectsResponse.statusText}`, errorBody);
        throw new Error(`Erro ao buscar projetos: ${projectsResponse.statusText}`);
      }

      const projects = await projectsResponse.json();
      if (projects.length === 0) break; // Sai do loop quando não há mais projetos

      allProjects = allProjects.concat(projects);
      page++;
    }

    console.log("Projetos encontrados:", allProjects.length);

    // Limita o número de projetos para teste
    const limitedProjects = allProjects.slice(0, 5);

    const issuesPromises = limitedProjects.map(async (project) => {
      console.log(`Buscando issues para o projeto ${project.name} (ID: ${project.id})...`);
      const issuesResponse = await fetch(
        `${GITLAB_API_URL}/projects/${project.id}/issues?state=closed`,
        {
          headers: {
            "Private-Token": TOKEN,
          },
        }
      );

      if (!issuesResponse.ok) {
        const errorBody = await issuesResponse.text();
        console.error(`Erro ao buscar issues para o projeto ${project.name}: ${issuesResponse.statusText}`, errorBody);
        return [];
      }

      const issues = await issuesResponse.json();
      console.log(`Issues encontradas para o projeto ${project.name}:`, issues.length);

      return issues.map((issue) => ({
        project_id: project.id,
        project_name: project.name,
        issue_id: issue.id,
        issue_title: issue.title,
        issue_number: issue.iid,
      }));
    });

    const allIssues = await Promise.allSettled(issuesPromises);
    const formattedIssues = allIssues
      .filter(result => result.status === 'fulfilled')
      .flatMap(result => result.value);

    return res.status(200).json(formattedIssues);
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: error.message });
  }
}