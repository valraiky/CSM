import bcrypt from 'bcrypt';
import { User } from '../models/User';
import { generateToken } from '../utils/jwt';

export class AuthService {
  static async register(email: string, password: string) {
    const existing = await User.findOne({ where: { email } });
    if (existing) throw new Error('Email already in use');

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    return { id: user.id, email: user.email };
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Invalid password');

    const token = generateToken({ id: user.id, email: user.email });
    return { token };
  }
}