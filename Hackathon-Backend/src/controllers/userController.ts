import { Request, Response } from 'express';
import { User } from '../models/user';
import UserService from '../services/userService';

export class UserController {
  public get(request: Request, response: Response) {
    UserService.get(request.params.userId, (user: User) => {
      response.json(user);
    });
  }

  public getAll(_request: Request, response: Response) {
    UserService.getAll((users: User[]) => {
      response.json(users);
    });
  }

  public add(request: Request, response: Response) {
    UserService.add(request.body, (user: User) => {
      response.json(user);
    });
  }

  public update(request: Request, response: Response) {
    UserService.update(request.params.userId, request.body, () => {
      response.json({ message: 'Successfully updated user!' });
    });
  }

  public delete(request: Request, response: Response) {
    UserService.delete(request.params.userId, () => {
      response.json({ message: 'Successfully deleted user!' });
    });
  }
}
