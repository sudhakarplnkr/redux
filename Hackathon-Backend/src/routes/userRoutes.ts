import { Router } from 'express';
import { UserController } from '../controllers/userController';

export class UserRoutes {
  private readonly userController: UserController;

  public constructor() {
    this.userController = new UserController();
  }

  public routes(application: Router): void {
    application
      .route('/user')
      .get(this.userController.getAll)
      .post(this.userController.add);
    application
      .route('/user/:userId')
      .get(this.userController.get)
      .put(this.userController.update)
      .delete(this.userController.delete);
  }
}
