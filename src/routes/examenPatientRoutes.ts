import { Router } from "express";
import { ExamenPatientController } from "../controllers/ExamenPatientController";

const router = Router();

router.post('/', ExamenPatientController.create);

export default router;