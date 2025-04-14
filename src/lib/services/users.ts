/**
 * 🧠 Hints:
 * - Call the API using fetch or axios.
 * - Use the full URL: https://dummyjson.com/users
 * - Return only the `users` array from the response
 * - Gracefully handle any errors (e.g., try/catch)
 */

const baseURL = 'https://dummyjson.com/users';

function generateParams(q: string = '') {
  const baseParams = `&limit=30&delay=1000&select=firstName,lastName,age,gender,email,username,height`;

  if (q) return `search?q=${q}` + baseParams;

  return baseParams;
}

export function getUsersApi(q: string = '') {
  const params = generateParams(q);
}
