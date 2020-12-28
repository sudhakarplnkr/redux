import { Message } from '../constants/message';
import { BeneficiaryModel } from '../models/event/beneficiary';
import { CouncilModel } from '../models/event/council';
import { Event, EventModel } from '../models/event/event';
import { EventCategoryModel } from '../models/event/eventCategory';
import { ProjectModel } from '../models/event/project';

export function addEvent(event: Event): any {
    return new Promise((resolve: any) => {
        EventModel.find({ EventTitle: event.EventTitle, Location: event.Location }).then((reposnse: Event) => {
            if (!reposnse) {
                event.StartTime = 24 * event.StartTime;
                event.EndTime = 24 * event.EndTime;
                if (!event.EventDate) {
                    event.EventDate = new Date(1900, 0, event.Date - 1);
                }
                event.CreatedOn = new Date();
                addDetailsIfNotExists(event);
                resolve(EventModel.create(event));
                return;
            }
            resolve(
                {
                    error: `${event.EventTitle} ${Message.EVENT_ALREADY_EXIST} in ${event.Location}`
                });
        });
    });
}

export function addDetailsIfNotExists(event: Event): void {
    BeneficiaryModel.find(
        { BeneficiaryName: event.BenificiaryName }).then((reposnse: any) => {
            if (!reposnse) {
                BeneficiaryModel.create({ BeneficiaryName: event.BenificiaryName }).then(reposnse);
            }
        });
    CouncilModel.find(
        { CouncilName: event.CouncilName }).then((reposnse: any) => {
            if (!reposnse) {
                CouncilModel.create({ CouncilName: event.CouncilName }).then(reposnse);
            }
        });
    ProjectModel.find(
        { ProjectName: event.Project }).then((reposnse: any) => {
            if (!reposnse) {
                ProjectModel.create({ ProjectName: event.Project }).then(reposnse);
            }
        });
    EventCategoryModel.find(
        { EventCategoryName: event.EventCategory }).then((reposnse: any) => {
            if (!reposnse) {
                EventCategoryModel.create({ EventCategoryName: event.EventCategory }).then(reposnse);
            }
        });
}
