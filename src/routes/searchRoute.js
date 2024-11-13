import searchController from "../controllers/searchController.js";

export default async function searchRoute(req, res) {
  const value = req.query.value;

  try {
    const results = await searchController(value);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
