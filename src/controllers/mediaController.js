import generateMediaUrl from "../utils/generateMediaUrl.js";
export default async function mediaController(query) {
  const url = generateMediaUrl(query);
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(url, options);
  const results = await response.json();

  return results;
}
