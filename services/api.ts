export const API_URL = 'https://example.com/api';

export async function fetchData(endpoint: string) {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`);
    return await response.json();
  } catch (error) {
    console.error('API error:', error);
    throw error;
  }
}
