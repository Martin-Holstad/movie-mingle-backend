export default async function reviewsController(mediaType, id) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(`${tmdbBaseUrl}/${mediaType}/${id}/reviews?api_key=${apiKey}&page=1`, options);
  const results = await response.json();

  return results;
}
