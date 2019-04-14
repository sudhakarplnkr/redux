import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { BaseRoutes } from './routes/BaseRoutes';
dotenv.config();

class App {
    public application: express.Application = express();
    public applicationRoute: BaseRoutes = new BaseRoutes();

    public constructor() {
        this.config();
        this.applicationRoute.routes(this.application);
    }

    private config(): void {
        this.application.use(bodyParser.json());
        this.application.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.application.use(express.static('public'));
    }
}

export default new App().application;
