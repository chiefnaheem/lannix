import express from "express";
import { postTransaction } from "../controller/transaction";
const router = express.Router();

router.post("/", postTransaction);
export default router;
