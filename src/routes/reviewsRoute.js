import reviewsController from "../controllers/reviewsController.js";

export default async function reviewsRoute(req, res) {
  const id = req.query.id;
  const mediaType = req.query.mediaType;

  try {
    const results = await reviewsController(mediaType, id);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
