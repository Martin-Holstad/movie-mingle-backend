import mediaDetailsController from "../controllers/mediaDetailsController.js";

export default async function mediaDetailsRoute(req, res) {
  const mediaType = req.query.mediaType;
  const id = req.query.id;

  try {
    const result = await mediaDetailsController(mediaType, id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
