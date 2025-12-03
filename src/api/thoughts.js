const API_URL = 'https://hola-happy-server.onrender.com/api/thoughts';

export const fetchThoughts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch thoughts');
  return response.json();
};