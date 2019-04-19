import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { Application, NextFunction, Request, Response } from 'express';
import * as fileUpload from 'express-fileupload';
import { verifyToken } from '../config/verifyToken';
import { Log } from '../models/log';
import logService from '../services/logService';
import { AssociateRoutes } from './associateRoutes';
import { DashboardRoutes } from './dashboardRoutes';
import { EventRoutes } from './eventRoutes';
import { LoginRoutes } from './loginRoutes';
import { LogRoutes } from './logRoutes';
import { RegistrationRoutes } from './registrationRoutes';
import { UserRoutes } from './userRoutes';

export class BaseRoutes {
    public readonly dashboardRoutes: DashboardRoutes;
    public readonly eventRoutes: EventRoutes;
    public readonly userRoutes: UserRoutes;
    public readonly loginRoutes: LoginRoutes;
    public readonly logRoutes: LogRoutes;
    public readonly associateRoutes: AssociateRoutes;
    public readonly registrationRoutes: RegistrationRoutes;

    public constructor() {
        this.eventRoutes = new EventRoutes();
        this.dashboardRoutes = new DashboardRoutes();
        this.userRoutes = new UserRoutes();
        this.loginRoutes = new LoginRoutes();
        this.logRoutes = new LogRoutes();
        this.associateRoutes = new AssociateRoutes();
        this.registrationRoutes = new RegistrationRoutes();
    }

    public routes(application: Application): void {
        const protectedRoutes = express.Router();
        application.use('/api', protectedRoutes);
        application.use(this.logErrors);

        protectedRoutes.use(verifyToken);

        protectedRoutes.use(bodyParser.json());
        protectedRoutes.use(bodyParser.urlencoded({ extended: false }));
        protectedRoutes.use(cookieParser());
        protectedRoutes.use(fileUpload());
        protectedRoutes.use(this.allowCors);
        application.use(this.allowCors);

        // route registration
        this.loginRoutes.routes(application);
        this.logRoutes.routes(application);
        this.registrationRoutes.routes(application);
        this.dashboardRoutes.routes(protectedRoutes);
        this.eventRoutes.routes(protectedRoutes);
        this.userRoutes.routes(protectedRoutes);
        this.associateRoutes.routes(protectedRoutes);
    }

    private allowCors(_request: Request, response: Response, next: NextFunction) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        response.header('Access-Control-Allow-Headers', '*, Origin, X-Requested-With, Content-Type, Accept');
        next();
    }

    private logErrors(error: any, _request: Request, _response: Response, next: NextFunction) {
        logService.log({ Message: error } as Log, () => {
            console.log('log saved');
        });
        next(error);
    }
}
