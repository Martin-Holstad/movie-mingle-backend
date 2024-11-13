import trendingController from "../controllers/trendingController.js";

export default async function trendingRoute(req, res) {
  try {
    const result = await trendingController(req.query);

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
