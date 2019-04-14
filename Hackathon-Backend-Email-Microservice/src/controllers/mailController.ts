import { Request, Response } from 'express';
import MailService from '../services/MailService';

export class MailController {
    public sendMail(request: Request, response: Response) {
        console.log(request.body);
        MailService.sendMail(request.body).then((result: any) => {
            response.json(result);
        });
    }
}
