import express, { Request, Response } from "express";
const route = express.Router();

route.get("/readiness", async (req: Request, res: Response) => {
  res.status(200).send("Ready");
});

export default route;
