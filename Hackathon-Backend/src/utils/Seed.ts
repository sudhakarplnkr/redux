import { User, UserModel } from '../models/user';
import UserService from '../services/userService';

class SeedService {
    public seed() {
        this.user();
    }

    private user(): void {
        UserModel.findOne({ Username: 'sudhakar' }).then((user: User) => {
            if (!user) {
                UserService.add(
                    {
                        AssociateId: 466590,
                        Email: 'sudhakar.s2@cognizant.com',
                        FirstName: 'Sudhakar',
                        LastName: 'S',
                        Phone: 7200060335,
                        Role: 'Admin',
                        Username: 'sudhakar'
                    } as User,
                    (response: any) => {
                        console.log(response);
                    }
                );
            }
        });
    }
}

export default new SeedService();
