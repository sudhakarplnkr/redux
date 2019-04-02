import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import { config } from './config/config';
import { BaseRoutes } from './routes/BaseRoutes';
import SeedService from './utils/Seed';

class App {
  public application: express.Application = express();
  public applicationRoute: BaseRoutes = new BaseRoutes();

  public constructor() {
    this.config();
    this.mongoSetup();
    this.applicationRoute.routes(this.application);
  }

  private config(): void {
    this.application.use(bodyParser.json());
    this.application.use(bodyParser.urlencoded({ extended: false }));
    // serving static files
    this.application.use(express.static('public'));
  }

  private mongoSetup(): void {
    mongoose.connect(config.mongoUrl, { useNewUrlParser: true });
    SeedService.seed();
  }
}

export default new App().application;
