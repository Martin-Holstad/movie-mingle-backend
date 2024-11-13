export default async function watchProvidersController(mediaType) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;
  const url = `${tmdbBaseUrl}/watch/providers/${mediaType}?language=en-US&watch_region=NO&api_key=${apiKey}`;
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(url, options);
  const results = await response.json();

  return results;
}
