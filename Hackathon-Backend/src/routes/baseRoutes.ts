import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { Application, NextFunction, Request, Response } from 'express';
import * as fileUpload from 'express-fileupload';
import { verifyToken } from '../config/verifyToken';
import { AssociateRoutes } from './associateRoutes';
import { DashboardRoutes } from './dashboardRoutes';
import { EventRoutes } from './eventRoutes';
import { LoginRoutes } from './loginRoutes';
import { UserRoutes } from './userRoutes';

export class BaseRoutes {
    public readonly dashboardRoutes: DashboardRoutes;
    public readonly eventRoutes: EventRoutes;
    public readonly userRoutes: UserRoutes;
    public readonly loginRoutes: LoginRoutes;
    public readonly associateRoutes: AssociateRoutes;

    public constructor() {
        this.eventRoutes = new EventRoutes();
        this.dashboardRoutes = new DashboardRoutes();
        this.userRoutes = new UserRoutes();
        this.loginRoutes = new LoginRoutes();
        this.associateRoutes = new AssociateRoutes();
    }

    public routes(application: Application): void {
        const protectedRoutes = express.Router();
        application.use('/api', protectedRoutes);

        protectedRoutes.use(verifyToken);

        protectedRoutes.use(bodyParser.json());
        protectedRoutes.use(bodyParser.urlencoded({ extended: false }));
        protectedRoutes.use(cookieParser());
        protectedRoutes.use(fileUpload());
        protectedRoutes.use(this.allowCors);
        application.use(this.allowCors);

        // route registration
        this.loginRoutes.routes(application);
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
}
