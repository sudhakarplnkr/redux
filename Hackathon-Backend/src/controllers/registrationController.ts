import { Request, Response } from 'express';
import AssociateService from '../services/associateService';

export class RegistrationController {
    public unRegister(request: Request, response: Response) {
        AssociateService.delete(request.params.associateId, (error: any) => {
            if (error) {
                response.json(error);
                return;
            }
            response.json('Event unregistered successfully.');
        });
    }
}
