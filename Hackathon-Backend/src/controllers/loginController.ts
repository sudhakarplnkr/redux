import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';
import { Associate } from '../models/associate';
import { User } from '../models/user';
import LoginService from '../services/loginService';

export class LoginController {
    public login(req: Request, res: Response) {
        LoginService.login(req.body.username, req.body.password, (error: any, user: User) => {
            if (error) {
                res.json({ message: error });
                return;
            }
            const { AssociateId, Role, _id } = user;
            const token = jwt.sign({ check: true,  id: _id, associateId: AssociateId }, config.secret, { expiresIn: config.tokenExpiresIn });
            res.json({ role: Role, token: token, associateId: AssociateId });
        });
    }

    public associateLogin(req: Request, res: Response) {
        LoginService.associateLogin(req.body.associateId, (error: any, associate: Associate) => {
            if (error) {
                res.json({ message: error });
                return;
            }
            const { AssociateId } = associate;
            const token = jwt.sign({ check: true, associateId: AssociateId }, config.secret, { expiresIn: config.tokenExpiresIn });
            res.json({ associateId: AssociateId, role: 'Associate', token: token });
        });
    }
}
