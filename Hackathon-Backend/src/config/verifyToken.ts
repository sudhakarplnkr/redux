import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from './config';

export function verifyToken(request: Request, response: Response, next: NextFunction) {
    const token = request.headers['access-token'];
    if (!token) {
        response.status(request.method === 'OPTIONS' ? 200 : 403).send({
            message: 'No token provided.'
        });
        return;
    }
    jwt.verify(token.toString(), config.secret, (error: any) => {
        if (error) {
            return response.status(403).json({ message: 'invalid token' });
        }
        next();
    });
}
