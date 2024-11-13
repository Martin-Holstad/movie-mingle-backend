import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import router from "./src/routes/index.js";
dotenv.config();

const port = process.env.SERVER_PORT;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500,
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(helmet());
app.use(limiter);
app.use(cors());
app.set("trust proxy", 1);
app.use(router);

app.listen(port, () => {
  console.log(`Movie mingle is listening on port: ${port}`);
});
