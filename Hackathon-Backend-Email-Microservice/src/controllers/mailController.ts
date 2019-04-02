import { Request, Response } from 'express';
import MailService from '../services/MailService';

export class MailController {
    public sendMail(request: Request, response: Response) {
        MailService.sendMail(request.body).then((result: any) => {
            response.json(result);
        });
    }
}
