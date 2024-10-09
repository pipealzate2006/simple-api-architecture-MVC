import { Router } from "express";
import { connection } from "../controllers/index.controller.js";

const router = Router();

router.get("/connection", connection);

export default router;
