import watchProvidersController from "../controllers/watchProvidersController.js";

export default async function watchProvidersRoute(req, res) {
  const mediaType = req.query.mediaType;

  try {
    const results = await watchProvidersController(mediaType);

    res.json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
