import { Router } from "express";
import { ExamenController } from "../controllers/ExamenController";

const router = Router();

router.post('/', ExamenController.create);
router.get('/', ExamenController.getAll);

export default router;