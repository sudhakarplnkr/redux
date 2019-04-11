import * as supertest from 'supertest';
import { Associate, AssociateModel } from '../../src/models/associate';
import { Event, EventModel } from '../../src/models/event/event';
import * as server from '../../src/server';
import { createAssociate, createEvent, loginForToken } from '../testHelper';
const app = supertest(server);

describe('dashboard controller tests', () => {
    const user = { token: undefined, eventId: undefined, associateId: undefined };
    beforeAll((done: any) => {
        loginForToken((loginResponse: any) => {
            user.token = loginResponse.body.token;
            createEvent((newEvent: Event) => {
                user.eventId = newEvent._id;
                createAssociate(user.eventId, (newAssociate: Associate) => {
                    user.associateId = newAssociate._id;
                    done();
                });
            });
        });
    });

    it('dashboard registered associate should fail without token', (done: any) => {
        app.get('/api/registered-associate')
            .set('Accept', 'application/json')
            .expect(403, done);
    });

    it('dashboard registered associate should return data', (done: any) => {
        app.get('/api/registered-associate')
            .set('Accept', 'application/json')
            .set('access-token', user.token)
            .then((response: any) => {
                expect(response.body.length).toBeGreaterThanOrEqual(1);
                done();
            });
    });

    afterAll((done: any) => {
        EventModel.findByIdAndDelete(user.eventId).then(() => {
            AssociateModel.findByIdAndDelete(user.associateId).then(() => {
                done();
            });
        });
    });
});
