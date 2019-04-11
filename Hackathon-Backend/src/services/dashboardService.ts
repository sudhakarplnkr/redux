import { AssociateModel } from '../models/associate';
import { Event, EventModel } from '../models/event/event';
import { IRegisteredAssociate } from '../models/event/RegisteredAssociate';

class DashboardService {
    public registeredAssociateByEvents(callback: any): void {
        EventModel.find().then((events: Event[]) => {
            const promise = events.map((event: Event) => {
                return new Promise((resolve: any) => {
                    AssociateModel.countDocuments({ EventId: event._id.toString() }, (_error: any, count: number) => {
                        const registeredAssociate: IRegisteredAssociate = { TotalRegisteredAssociate: count, EventTitle: event.EventTitle };
                        return resolve(registeredAssociate);
                    });
                });
            });
            Promise.all(promise).then(callback);
        });
    }
}

export default new DashboardService();
