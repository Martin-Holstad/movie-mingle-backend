export default async function mediaDetailsController(mediaType, id) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(`${tmdbBaseUrl}/${mediaType}/${id}?append_to_response=videos,credits&api_key=${apiKey}`, options);
  const results = await response.json();

  return results;
}
