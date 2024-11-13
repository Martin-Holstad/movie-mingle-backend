import freeToWatchController from "../controllers/freeToWatchController.js";

export default async function freeToWatchRoute(req, res) {
  try {
    const result = await freeToWatchController(req.query);

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
