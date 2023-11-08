const API_BASE_URL = 'https://api.github.com';

const MAX_RESULTS = 1000;

export const fetchRepositories = async (
  query: string,
  pageParam: number = 1,
  itemsPerPage: number = 12
) => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/search/repositories?q=${query}&page=${pageParam}&per_page=${itemsPerPage}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const totalResults = Math.min(data.total_count, MAX_RESULTS); // Limit to MAX_RESULTS results
    const totalPages = Math.ceil(totalResults / itemsPerPage); // Calculate total pages based on limited results
    return { data: data.items, totalPages };
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};
