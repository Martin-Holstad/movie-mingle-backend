export default async function freeToWatchController(query) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;

  const { category } = query;

  const url = `${tmdbBaseUrl}/discover/${category}?with_watch_monetization_types=free&watch_region=NO&with_original_language=en&api_key=${apiKey}`;

  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(url, options);
  const results = await response.json();

  return results;
}
