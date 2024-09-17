import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config';

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  return new Promise((resolve, reject) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
      return reject(res.sendStatus(401)); // Si no hay token, retorna un error 401 (No Autorizado)
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return reject(res.sendStatus(403)); // Si el token no es válido, retorna un error 403 (Prohibido)
      }

      // Añadimos el usuario al objeto req
      (req as any).user = user;
      resolve(next()); // Llama al siguiente middleware o ruta
    });
  });
};
