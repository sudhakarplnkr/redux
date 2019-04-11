import { Router } from 'express';
import { DashboardController } from '../controllers/dashboardController';

export class DashboardRoutes {
    private readonly dashboardController: DashboardController;

    public constructor() {
        this.dashboardController = new DashboardController();
    }

    public routes(application: Router): void {
        application.route('/registered-associate').get(this.dashboardController.registeredAssociateByEvents);
    }
}
