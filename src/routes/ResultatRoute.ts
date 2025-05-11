import { Router } from "express";
import { ResultatController } from "../controllers/ResultatController";

const router = Router();

router.post('/', ResultatController.create);

export default router;