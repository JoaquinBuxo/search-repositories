const API_BASE_URL = 'https://api.github.com';

export const fetchRepositories = async (
  query: string,
  pageParam: number = 1,
  numItems: number = 10
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/repositories?q=${query}&page=${pageParam}&per_page=${numItems}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const totalPages = Math.ceil(data.total_count / numItems);
    return { data: data.items, totalPages };
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
