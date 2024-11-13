export default async function popularController(query) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;

  const { category } = query;

  const options = { method: "GET", headers: { accept: "application/json" } };
  let movieUrl = `${tmdbBaseUrl}/discover/movie`;
  let tvUrl = `${tmdbBaseUrl}/discover/tv`;
  let params = `api_key=${apiKey}&watch_region=NO&with_original_language=en&with_watch_monetization_types=`;

  switch (category) {
    case "streaming":
      params += `flatrate`;
      break;
    case "onTv":
      params += `free`;
      break;
    case "forRent":
      params += `rent`;
      break;
    case "inTheaters":
      movieUrl = `${tmdbBaseUrl}/movie/now_playing`;
      params += "";
      break;
    default:
      params = "";
  }

  movieUrl = `${movieUrl}?${params}`;
  tvUrl = `${tvUrl}?${params}`;

  let results;

  try {
    const movieResponse = await fetch(movieUrl, options);
    const movies = await movieResponse.json();

    if (category !== "inTheaters") {
      const tvResponse = await fetch(tvUrl, options);
      const tvShows = await tvResponse.json();
      const combinedResults = [...movies.results, ...tvShows.results];
      results = combinedResults.sort(() => Math.random() - 0.5);
    } else {
      results = movies.results.sort(() => Math.random() - 0.5);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    results = [];
  }

  return results;
}
