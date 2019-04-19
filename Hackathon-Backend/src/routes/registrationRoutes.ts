import { Router } from 'express';
import { RegistrationController } from '../controllers/registrationController';

export class RegistrationRoutes {
    private readonly registrationController: RegistrationController;

    public constructor() {
        this.registrationController = new RegistrationController();
    }

    public routes(application: Router): void {
        application.route('/un-register/:associateId').get(this.registrationController.unRegister);
    }
}
