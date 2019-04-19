import * as supertest from 'supertest';
import { Associate, AssociateModel } from '../../src/models/associate';
import * as server from '../../src/server';
import { associate, loginForToken } from '../testHelper';
const app = supertest(server);

describe('associate controller tests', () => {
    const user = { token: undefined };
    beforeAll((done: any) => {
        loginForToken((loginResponse: any) => {
            user.token = loginResponse.body.token;
            associate.EventId = '5cac846a6b84c337b9ac554e';

            // Act
            app.post('/api/associate')
                .send(associate)
                .set('Accept', 'application/json')
                .set('access-token', user.token)
                .then((result: any) => {
                    // Assert
                    expect(result.status).toBe(200);
                    done();
                });
        });
    });

    it('get all associate fails without token', (done: any) => {
        app.get('/api/associate')
            .set('Accept', 'application/json')
            .expect(403, done);
    });

    it('get all associate', (done: any) => {
        app.get('/api/associate')
            .set('Accept', 'application/json')
            .set('access-token', user.token)
            .expect(200)
            .then((response: any) => {
                expect(response.body.length).toBeGreaterThanOrEqual(1);
                done();
            });
    });

    it('update associate', (done: any) => {
        app.get('/api/associate')
            .set('Accept', 'application/json')
            .set('access-token', user.token)
            .expect(200)
            .then((response: any) => {
                app.put(`/api/associate/${response.body[0]._id}`)
                    .set('Accept', 'application/json')
                    .set('access-token', user.token)
                    .send(response.body[0])
                    .then((result: any) => {
                        expect(result.body.message).toBe('Successfully updated associate!');
                        done();
                    });
            });
    });

    afterAll((done: any) => {
        AssociateModel.findOne({ EventId: associate.EventId, AssociateId: associate.AssociateId }, (_error: any, associateToRemove: Associate) => {
            if (associateToRemove) {
                app.get(`/un-register/${associateToRemove._id}`)
                    .set('Accept', 'application/json')
                    .expect(200)
                    .then(() => {
                        done();
                    });
            } else {
                done();
            }
        });
    });
});
