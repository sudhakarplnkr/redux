import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from './config';

export function verifyToken(request: Request, response: Response, next: NextFunction) {
    if (request.method === 'OPTIONS') {
        next();
        return;
    }
    const token = request.headers['access-token'];
    if (!token) {
        return response.status(403).send({
            message: 'No token provided.'
        });
    }
    jwt.verify(token.toString(), config.secret, (error: any) => {
        if (error) {
            return response.status(403).json({ message: 'invalid token' });
        }
        next();
    });
}
