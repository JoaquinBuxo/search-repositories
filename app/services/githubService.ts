const API_BASE_URL = 'https://api.github.com';

export const fetchRepositories = async (query: string) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/repositories?q=${query}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
