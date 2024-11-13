export default function generateQueryUrl(query) {
  const apiKey = process.env.TMDB_API_KEY;
  const tmdbBaseUrl = process.env.TMDB_BASE_URL;
  const { mediaType, mediaCategory, sortBy, providers, releaseDateMin, releaseDateMax, genres, userScoreMin, userScoreMax, page } = query;

  const languageParams = `?language=en-US&with_original_language=en`;
  const sortByParams = `&sort_by=${sortBy}`;
  const providersParams = `&with_watch_providers=${providers}&watch_region=NO`;
  const genresParams = `&with_genres=${genres}`;
  const userScoreParams = `&vote_average.gte=${userScoreMin}&vote_average.lte=${userScoreMax}`;
  const pageParams = `&page=${page}`;
  const apiKeyParams = `&api_key=${apiKey}`;
  let dateParams;
  let withOutParams;
  let voteCountParams;

  switch (mediaType) {
    case "movie":
      dateParams = `&with_release_type=2|3&primary_release_date.gte=${releaseDateMin}&primary_release_date.lte=${releaseDateMax}`;
      break;
    case "tv":
      dateParams = `&air_date.gte=${releaseDateMin}&air_date.lte=${releaseDateMax}`;
      break;
    default:
      dateParams = "";
  }

  switch (mediaCategory) {
    case "top-rated":
      withOutParams = `&without_genres=99,10755`;
      voteCountParams = `&vote_count.gte=200`;
      break;
    default:
      withOutParams = "";
      voteCountParams = "";
  }

  const params = `${languageParams}${sortByParams}${providersParams}${dateParams}${genresParams}${userScoreParams}${pageParams}${withOutParams}${voteCountParams}${apiKeyParams}`;
  const url = `${tmdbBaseUrl}/discover/${mediaType}` + params;
  return url;
}
