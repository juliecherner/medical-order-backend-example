import express from "express";
import orderRoute from "./order.route";
import readinessRoute from "./readiness.route";

const router = express.Router();

router.use("/", orderRoute);
router.use("/", readinessRoute);

export default router;
