import { Associate, AssociateModel } from '../models/associate';
import { Beneficiary, BeneficiaryModel } from '../models/event/beneficiary';
import { Council, CouncilModel } from '../models/event/council';
import { Event, EventModel } from '../models/event/event';
import { EventCategory, EventCategoryModel } from '../models/event/eventCategory';
import { FavoriteEvent, FavoriteEventModel } from '../models/event/favoriteEvent';
import { Project, ProjectModel } from '../models/event/project';
import { TransportBoardingType, TransportBoardingTypeModel } from '../models/event/transportBoardingType';
import { addEvent } from './eventFactory';

class EventService {
    public get(eventId: string, callback: any): void {
        EventModel.findById(eventId).then(callback);
    }

    public getAll(userId: string, callback: any): void {
        EventModel.find().then((events: Event[]) => {
            FavoriteEventModel.find({ UserId: userId })
                .then((favariteEvents: FavoriteEvent[]) => {
                    return events.map((event: any) => {
                        const eventDetail = { ...event._doc, IsUserFavorite: favariteEvents.some((favariteEvent: FavoriteEvent) => favariteEvent.EventId === event._id.toString()) };
                        return eventDetail;
                    });
                })
                .then(callback);
        });
    }

    public getMyEvents(associateId: number, callback: any): void {
        EventModel.find().then((events: Event[]) => {
            AssociateModel.find({ AssociateId: associateId })
                .then((associates: Associate[]) =>
                    events.filter((event: any) => {
                        if (associates.findIndex((associate: Associate) => associate.EventId === event._id.toString()) > -1) {
                            return event;
                        }
                    })
                )
                .then(callback);
        });
    }

    public add(event: Event, callback: any): void {
        addEvent(event).then(callback);
    }

    public postEventUpdate(event: any, callback: any): void {
        const modifications = new Event();
        modifications.VolunteerHours = event.VolunteerHours;
        modifications.TravelHours = event.TravelHours;
        modifications.LivesImpacted = event.LivesImpacted;

        EventModel.findByIdAndUpdate({ _id: event.EventId }, modifications).then(callback);
    }

    public bulkAdd(events: Event[], callback: any): void {
        const promise = events.map((event: Event) => addEvent(event));
        Promise.all(promise).then(callback);
    }

    public update(eventId: string, event: Event, callback: any): void {
        EventModel.findByIdAndUpdate(eventId, event).then(callback);
    }

    public delete(eventId: string, callback: any): void {
        EventModel.findOneAndDelete(eventId).then(callback);
    }

    public addBeneficiary(beneficiaryName: Beneficiary, callback: any): void {
        BeneficiaryModel.create(beneficiaryName).then(callback);
    }
    public addCouncil(councilName: Council, callback: any): void {
        CouncilModel.create(councilName).then(callback);
    }
    public addProject(projectName: Project, callback: any): void {
        ProjectModel.create(projectName).then(callback);
    }
    public addEventCategory(eventCategory: EventCategory, callback: any): void {
        EventCategoryModel.create(eventCategory).then(callback);
    }
    public addTransportBoardingType(transportBoardingType: TransportBoardingType, callback: any): void {
        TransportBoardingTypeModel.create(transportBoardingType).then(callback);
    }

    public getEventDefaultValues(callback: any): void {
        const beneficiary = new Promise((resolve: any) => {
            resolve(BeneficiaryModel.find({}));
        });
        const council = new Promise((resolve: any) => {
            resolve(CouncilModel.find({}));
        });
        const project = new Promise((resolve: any) => {
            resolve(ProjectModel.find({}));
        });
        const eventCategory = new Promise((resolve: any) => {
            resolve(EventCategoryModel.find({}));
        });
        const transportBoardingType = new Promise((resolve: any) => {
            resolve(TransportBoardingTypeModel.find({}));
        });

        Promise.all([beneficiary, council, project, eventCategory, transportBoardingType]).then((response: any[]) => {
            const defaults = {
                beneficiary: response[0],
                council: response[1],
                eventCategory: response[3],
                project: response[2],
                transportBoardingType: response[4]
            };
            callback(defaults);
        });
    }

    public getFavuriteEvents(userId: string, callback: any): void {
        FavoriteEventModel.find({ UserId: userId }).then((favoriteEvents: FavoriteEvent[]) => {
            const eventIds = favoriteEvents.map(({ EventId }: { EventId: string }) => EventId);
            EventModel.find({ _id: { $in: eventIds } }).then(callback);
        });
    }

    public addFavuriteEvent(userId: string, eventId: string, callback: any): void {
        const favorite = { UserId: userId, EventId: eventId };
        FavoriteEventModel.findOne(favorite).then((favoriteEvent: FavoriteEvent) => {
            if (!favoriteEvent) {
                FavoriteEventModel.create(favorite).then(callback);
            }
        });
    }

    public removeFavuriteEvent(userId: string, eventId: string, callback: any): void {
        const favorite = { UserId: userId, EventId: eventId };
        FavoriteEventModel.findOneAndDelete(favorite).then(callback);
    }
}

export default new EventService();
