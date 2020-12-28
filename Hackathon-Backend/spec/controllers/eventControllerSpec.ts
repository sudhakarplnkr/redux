import * as supertest from 'supertest';
import { Event, EventModel } from '../../src/models/event/event';
import { User } from '../../src/models/user';
import * as server from '../../src/server';
import { createEvent, event, loginForToken } from '../testHelper';
const app = supertest(server);

describe('event controller tests', () => {
    const user = { token: null, eventId: null };
    beforeAll((done: any) => {
        loginForToken((loginResponse: any) => {
            user.token = loginResponse.body.token;
            app.post(`/api/event`)
                .set('Accept', 'application/json')
                .set('access-token', user.token)
                .send(event)
                .expect(200)
                .then(() => {
                    done();
                });
        });
    });

    it('get all event fails without token', (done: any) => {
        app.get('/api/event')
            .set('Accept', 'application/json')
            .expect(403, done);
    });

    it('get all event should return all the events', (done: any) => {
        app.get('/api/event')
            .set('Accept', 'application/json')
            .set('access-token', user.token)
            .then((response: any) => {
                expect(response.body.length).toBeGreaterThanOrEqual(1);
                done();
            });
    });

    it('update event should modify the existing event with new data', (done: any) => {
        app.get('/api/event')
            .set('Accept', 'application/json')
            .set('access-token', user.token)
            .then((response: any) => {
                app.put(`/api/event/${response.body[0]._id}`)
                    .set('Accept', 'application/json')
                    .set('access-token', user.token)
                    .send(response.body[0])
                    .then((result: any) => {
                        expect(result.body.message).toBe('Successfully updated event!');
                        done();
                    });
            });
    });

    it('delete event should delete the existing event', (done: any) => {
        EventModel.find({ EventTitle: event.EventTitle }, (_error: any, response: User) => {
            app.delete(`/api/event/${response._id}`)
                .set('Accept', 'application/json')
                .set('access-token', user.token)
                .then((result: any) => {
                    expect(result.body.message).toBe('Successfully deleted event!');
                    createEvent((creadedEvent: Event) => {
                        console.log(creadedEvent);
                        user.eventId = creadedEvent._id;
                        done();
                    });
                });
        });
    });

    afterAll((done: any) => {
        EventModel.find({ EventTitle: event.EventTitle }, (_error: any, userToRemove: User) => {
            EventModel.findByIdAndDelete(userToRemove._id, (err: any, res: any) => {
                done();
            });
        }).catch(() => {
            done();
        });
    });
});
