import popularController from "../controllers/popularController.js";

export default async function popularRoute(req, res) {
  try {
    const result = await popularController(req.query);

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Internal Server Error" });
  }
}
