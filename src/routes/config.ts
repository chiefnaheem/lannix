import express from 'express';
import { feeConfiguration } from '../controller/configuration';
const router = express.Router();

router.post("/fee", feeConfiguration);
export default router;