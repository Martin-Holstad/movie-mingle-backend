export default async function searchController(value) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(`${tmdbBaseUrl}/search/multi?query=${value}&api_key=${apiKey}`, options);
  const results = await response.json();

  return results;
}
