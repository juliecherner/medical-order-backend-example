import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import https from "https";
import http from "http";
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

app.use((req: Request, res: Response, next) => {
  res.status(404).send("Page Not Found");

  if (!req.secure) {
    return res.redirect(["https://", req.get("Host"), req.url].join(""));
  }
  next();
});

const port = process.env.APP_PORT || 8080;
const httpsServerPort = process.env.HTTPS_SERVER_PORT || 80;

https.createServer(app).listen(httpsServerPort, () => {
  console.log("HTTP server started on port 80");
});

http.createServer(app).listen(port, () => {
  console.log("HTTPS server started on port 8080");
});
