import mediaController from "../controllers/mediaController.js";

export default async function mediaRoute(req, res) {
  try {
    const results = await mediaController(req.query);

    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
