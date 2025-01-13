const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchData(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.statusText}`);
  }

  return await response.json();
}
