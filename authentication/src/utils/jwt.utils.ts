import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const generateToken = (user: { username: string }): string => {
  return jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });
};
