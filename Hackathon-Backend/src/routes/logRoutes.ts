import { Router } from 'express';
import { LogController } from '../controllers/logController';

export class LogRoutes {
    private readonly logController: LogController;

    public constructor() {
        this.logController = new LogController();
    }

    public routes(application: Router): void {
        application.route('/log').post(this.logController.log);        
    }
}
