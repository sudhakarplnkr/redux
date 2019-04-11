import { Router } from 'express';
import { AssociateController } from '../controllers/associateController';

export class AssociateRoutes {
  private readonly associateController: AssociateController;

  public constructor() {
    this.associateController = new AssociateController();
  }

  public routes(application: Router): void {
    application
      .route('/associate')
      .get(this.associateController.getAll)
      .post(this.associateController.add);
    application.route('/bulk-associate/:eventId').post(this.associateController.bulkAdd);
    application
      .route('/associate/:associateId')
      .get(this.associateController.get)
      .put(this.associateController.update);
  }
}
