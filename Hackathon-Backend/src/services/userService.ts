import { Message } from '../constants/message';
import { User, UserModel } from '../models/user';

class UserService {
  public get(userId: string, callback: any): void {
    UserModel.findById(userId).then(callback);
  }

  public getAll(callback: any): void {
    UserModel.find({ Role: ['EventPoc', 'Pmo'] }).then(callback);
  }

  public add(user: User, callback: any): void {
    const hashPassword = UserModel.cryptPassword('password');
    user.Password = hashPassword;
    this.addUser(user, callback);
  }

  public update(userId: string, user: User, callback: any): void {
    const { Password, Username, ...userModel } = user;
    UserModel.findByIdAndUpdate(userId, userModel).then(callback);
  }

  public delete(userId: string, callback: any): void {
    UserModel.findByIdAndDelete(userId).then(callback);
  }

  private addUser(user: User, callback: any) {
    UserModel.find({ Username: user.Username }).then(
      (availableUser: User) => {
        if (!availableUser) {
          UserModel.create(user, (_error: any, newUser: User) => {
            if (callback) {
              callback(newUser);
            }
          });
          return;
        }
        if (callback) {
          callback({ error: Message.USER_ALREADY_EXIST });
        }
      }
    );
  }
}

export default new UserService();
