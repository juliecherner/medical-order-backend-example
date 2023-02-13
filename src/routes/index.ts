import express from "express";
import orderRoute from "./order.route";

const router = express.Router();

router.use("/", orderRoute);

export default router;
