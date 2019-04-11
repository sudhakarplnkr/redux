import * as supertest from 'supertest';
import { Associate, AssociateModel } from '../src/models/associate';
import { Event, EventModel } from '../src/models/event/event';
import { User } from '../src/models/user';
import * as server from '../src/server';

export const event = {
    BenificiaryName: 'string',
    CouncilName: 'string',
    EndTime: 12,
    EventCategory: 'string',
    EventDate: new Date(),
    EventDescription: 'string',
    EventTitle: 'TestEvent',
    Location: 'string',
    NoOfValunteersRequired: 20,
    PocId: 466590,
    Project: 'string',
    StartTime: 11
} as Event;

export const associate = {
    AssociateId: 999999,
    BoardingPoint: 'Test',
    OwnTransport: false
} as Associate;

export const user = {
    AssociateId: 466590,
    Email: 'test@gmail.com',
    FirstName: 'test',
    LastName: 't',
    Phone: 9876543210,
    Role: 'Pmo',
    Username: 'testuser'
} as User;

export const createEvent = (callback: any) => {
    EventModel.create(event).then(callback);
};

export const createAssociate = (eventId: string, callback: any) => {
    associate.EventId = eventId;
    AssociateModel.create(associate).then(callback);
};

export const loginForToken = (callback: any) => {
    const app = supertest(server);
    app.post('/login')
        .send({ username: 'sudhakar', password: 'password' })
        .set('content-type', 'application/json')
        .then(callback);
};
