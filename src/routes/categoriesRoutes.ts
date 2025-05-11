import { Router } from "express";
import { CategoriesControler } from "../controllers/CategoriesControler";

const router = Router();

router.post('/', CategoriesControler.create);

export default router;