import { User, UserModel } from '../models/user';

class LoginService {
    public login(username: string, password: string, callback: any): void {
        UserModel.findOne({ Username: username }).then((user: User) => {
            if (user && UserModel.comparePassword(password, user.Password)) {
                callback(null, user);
                return;
            }
            callback('Invalid associate id.');
        });
    }

    public associateLogin(associateId: number, callback: any): void {
        callback(null, { AssociateId: associateId });
    }
}

export default new LoginService();
