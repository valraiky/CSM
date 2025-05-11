import { Router, Request, Response } from 'express';
import { PatientController } from '../controllers/PatientController';

const router = Router();

// Route pour récupérer tous les patients
router.get('/', PatientController.getAll);
router.post('/', PatientController.create);
router.get('/:id/structure', PatientController.getPatientStructure);


export default router;