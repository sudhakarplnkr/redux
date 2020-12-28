import { Message } from '../constants/message';
import { Associate, AssociateModel } from '../models/associate';
import { sendMail } from './mailService';

class AssociateService {
    public get(associateId: string, callback: any): void {
        AssociateModel.findById(associateId).then(callback);
    }

    public getAll(callback: any): void {
        AssociateModel.find().then(callback);
    }

    public add(associate: Associate, callback: any): void {
        this.bulkAdd(associate.EventId, [associate], callback);
    }

    public bulkAdd(eventId: string, associates: Associate[], callback: any): void {
        const promise = associates.map((associate: Associate) =>
            AssociateModel.find({ AssociateId: associate.AssociateId, EventId: eventId }).then((response: Associate) => {
                return new Promise((resolve: any) => {
                    if (!response) {
                        associate.EventId = eventId;
                        if (AssociateModel.isModelValid(associate)) {
                            AssociateModel.create({ ...associate, EventId: eventId }).then((newAssociate: Associate) => {
                                resolve(sendMail(associate.AssociateId, eventId, newAssociate._id));
                            });
                            return;
                        }
                        resolve({
                            error: `${associate.AssociateId}: ${Message.INSUFICIENT_DATA}`
                        });
                        return;
                    }
                    resolve({
                        error: `${associate.AssociateId}: ${Message.ASSOCIATE_ALREADY_EXIST}`
                    });
                });
            })
        );
        Promise.all(promise).then(callback);
    }

    public update(associateId: string, associate: Associate, callback: any): void {
        AssociateModel.findOneAndUpdate(associateId, associate).then(callback);
    }

    public delete(associateId: string, callback: any): void {
        AssociateModel.findByIdAndDelete(associateId, callback);
    }
}

export default new AssociateService();
