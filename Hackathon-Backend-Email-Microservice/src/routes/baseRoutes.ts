import * as express from 'express';
import { Application, NextFunction, Request, Response } from 'express';
import { MailRoutes } from './mailRoutes';

export class BaseRoutes {
    public readonly mailRoutes: MailRoutes;

    public constructor() {
        this.mailRoutes = new MailRoutes();
    }

    public routes(application: Application): void {
        const router = express.Router();
        application.use('/api', router);

        application.use(this.allowCors);

        // route registration
        this.mailRoutes.routes(router);
    }

    private allowCors(_request: Request, response: Response, next: NextFunction) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    }
}
