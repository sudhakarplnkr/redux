import { Request, Response } from 'express';
import { IRegisteredAssociate } from '../models/event/RegisteredAssociate';
import DashboardService from '../services/dashboardService';

export class DashboardController {
    public registeredAssociateByEvents(_request: Request, response: Response) {
        DashboardService.registeredAssociateByEvents((events: IRegisteredAssociate[]) => {
          response.json(events);
        });
    }
}
