import * as supertest from 'supertest';
import { UserModel } from '../../src/models/user';
import * as server from '../../src/server';
import { loginForToken, user } from '../testHelper';
const app = supertest(server);

describe('user controller tests', () => {
    const testData = { token: null, userId: null };
    beforeAll((done: any) => {
        loginForToken((loginResponse: any) => {
            testData.token = loginResponse.body.token;
            app.post(`/api/user`)
                .set('Accept', 'application/json')
                .set('access-token', testData.token)
                .send(user)
                .expect(200)
                .then((newUser: any) => {                    
                    testData.userId = newUser.body._id;
                    done();
                });
        });
    });

    it('get all user fails without token', (done: any) => {
        app.get('/api/user')
            .set('Accept', 'application/json')
            .expect(403, done);
    });

    it('get all user should return all the users', (done: any) => {
        app.get('/api/user')
            .set('Accept', 'application/json')
            .set('access-token', testData.token)
            .then((response: any) => {
                expect(response.body.length).toBeGreaterThanOrEqual(1);
                done();
            });
    });

    it('update user should modify the existing user with new data', (done: any) => {
        app.get('/api/user')
            .set('Accept', 'application/json')
            .set('access-token', testData.token)
            .then((response: any) => {
                app.put(`/api/user/${response.body[0]._id}`)
                    .set('Accept', 'application/json')
                    .set('access-token', testData.token)
                    .send(response.body[0])
                    .then((result: any) => {
                        expect(result.body.message).toBe('Successfully updated user!');
                        done();
                    });
            });
    });

    it('delete user should delete the existing user', (done: any) => {        
        app.delete(`/api/user/${testData.userId}`)
            .set('Accept', 'application/json')
            .set('access-token', testData.token)
            .then((result: any) => {
                expect(result.body.message).toBe('Successfully deleted user!');
                app.post(`/api/user`)
                    .set('Accept', 'application/json')
                    .set('access-token', testData.token)
                    .send(user)
                    .expect(200)
                    .then((newUser: any) => {
                        testData.userId = newUser.body._id;
                        done();
                    });
            });
    });

    afterAll((done: any) => {
        UserModel.findOneAndRemove({ _id: testData.userId }, () => {
            done();
        });
    });
});
