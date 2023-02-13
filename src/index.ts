import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
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

app.get("/", function (req, res) {
  res.send("Welcome to mini-API for medical orders");
});

app.use((req: Request, res: Response) => {
  res.status(404).send("Page Not Found");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("HTTPS server started on port 8080");
});
