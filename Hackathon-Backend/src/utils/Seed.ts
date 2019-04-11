import { TransportBoardingType, TransportBoardingTypeModel } from '../models/event/transportBoardingType';
import { User, UserModel } from '../models/user';
import UserService from '../services/userService';

class SeedService {
    public seed() {
        this.user();
        this.TransportBoardingType();
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

    private TransportBoardingType(): void {
        const boardingTypes: TransportBoardingType[] = [];
        boardingTypes.push({ TransportBoardingType: 'Fixed' } as TransportBoardingType);
        boardingTypes.push({ TransportBoardingType: 'Floating' } as TransportBoardingType);
        boardingTypes.push({ TransportBoardingType: 'No Transport' } as TransportBoardingType);

        TransportBoardingTypeModel.countDocuments({}, (totalCount: number) => {
            if (totalCount === null) {
                TransportBoardingTypeModel.insertMany(boardingTypes);
            }
        });
    }
}

export default new SeedService();
