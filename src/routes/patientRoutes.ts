import { Router, Request, Response } from 'express';
import { PatientController } from '../controllers/PatientController';
import PatientRepository from '../repositories/PatientRepository';

const router = Router();

// Route pour récupérer tous les patients
router.get('/', PatientController.getAll);

// Route pour récupérer la structure complète d'un patient
const getPatientStructure = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const patientId = parseInt(req.params.id, 10);
    

    const data = await PatientRepository.getPatientWithResults(patientId);

    if (!data) {
      res.status(404).json({ message: 'Patient non trouvé' });
      return;
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur interne du serveur' });
  }
};

router.get('/:id/structure', getPatientStructure);

export default router;