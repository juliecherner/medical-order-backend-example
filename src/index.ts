import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import https from "https";
import { corsConfig } from "../corsConfig";
import { connectDb } from "./database";
import router from "./routes";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

config();

connectDb();

app.use("/api", router);

app.use((req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});

const server = https.createServer(app);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`server is running on port`);
});
