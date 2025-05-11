import { Router } from "express";
import { SousCategoriesController } from "../controllers/SousCategoriesController";

const router = Router();

router.post('/', SousCategoriesController.create);

export default router;