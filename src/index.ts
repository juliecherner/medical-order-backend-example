import express, { Express, Request, Response } from "express";
import cors from "cors";
import path from "path";
import { config } from "dotenv";

import { corsConfig } from "../corsConfig";
import { connectDb } from "./database";
import router from "./routes";

const app: Express = express();

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

config();

connectDb();

app.use("/api", router);

app.use((req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});

app.listen(process.env.APP_PORT || 8080, () => {
  console.log(`server is on port`);
});
