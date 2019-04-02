import { Router } from 'express';
import { MailController } from '../controllers/mailController';

export class MailRoutes {
    private readonly mailController: MailController;

    public constructor() {
        this.mailController = new MailController();
    }

    public routes(application: Router): void {
        application.route('/mail').post(this.mailController.sendMail);
    }
}
