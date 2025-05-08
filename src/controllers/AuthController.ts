import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const {fullname, email, password } = req.body;
      const user = await AuthService.register(fullname, email, password);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const result = await AuthService.login(email, password);
      res.json(result);
    } catch (err: any) {
      res.status(401).json({ error: err.message });
    }
  }

  static async profile(req: Request, res: Response) {
    res.json({ message: 'Protected route', user: req.user });
  }
}
