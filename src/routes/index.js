import express from "express";
import mediaRoute from "./mediaRoute.js";
import mediaDetailsRoute from "./mediaDetailsRoute.js";
import reviewsRoute from "./reviewsRoute.js";
import searchRoute from "./searchRoute.js";
import watchProvidersRoute from "./watchProvidersRoute.js";
import trendingRoute from "./trendingRoute.js";
import popularRoute from "./popularRoute.js";
import freeToWatchRoute from "./freeToWatchRoute.js";

const router = express.Router();

router.get("/media", mediaRoute);
router.get("/mediaDetails", mediaDetailsRoute);
router.get("/reviews", reviewsRoute);
router.get("/search", searchRoute);
router.get("/watch-providers", watchProvidersRoute);
router.get("/trending", trendingRoute);
router.get("/popular", popularRoute);
router.get("/free-to-watch", freeToWatchRoute);

export default router;
