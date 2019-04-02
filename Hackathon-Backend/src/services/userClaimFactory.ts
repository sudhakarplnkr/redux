import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';
class UserClaimFactory {
    
    public getUserId(request: Request): string {
        return this.getProperty(request, 'id') as string;
    }

    public getAssociateId(request: Request): number {
        return this.getProperty(request, 'associateId') as number;
    }

    private getProperty(request: Request, propertyName: string): string | number {
        const token = request.headers['access-token'];
        const userClaim = jwt.verify(token.toString(), config.secret);
        return userClaim[propertyName];
    }
}

export default new UserClaimFactory();
