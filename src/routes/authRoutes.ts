import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import passport from '../middlewares/passport';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/profile', passport.authenticate('jwt', { session: false }), AuthController.profile);

export default router;