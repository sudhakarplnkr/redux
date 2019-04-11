import { Router } from 'express';
import { LoginController } from '../controllers/loginController';

export class LoginRoutes {
    private readonly loginController: LoginController;

    public constructor() {
        this.loginController = new LoginController();
    }

    public routes(application: Router): void {
        application.route('/login').post(this.loginController.login);
        application.route('/associate-login').post(this.loginController.associateLogin);
    }
}
