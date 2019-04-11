import * as supertest from 'supertest';
import * as server from '../../src/server';
import { loginForToken } from '../testHelper';
const app = supertest(server);

describe('login controller tests', () => {
    it('admin login with valid credential should return the token', (done: any) => {
        loginForToken((response: any) => {
            expect(response.body.token).toBeDefined();
            expect(response.body.role).toBe('Admin');
            done();
        });
    });

    it('admin login with valid credential should return the token', (done: any) => {
        app.post('/login')
            .send({ username: 'sudhakar', password: 'test' })
            .set('content-type', 'application/json')
            .then((response: any) => {
                expect(response.body.token).not.toBeDefined();
                done();
            });
    });

    it('assciate login with any associate id should return the token', (done: any) => {
        app.post('/associate-login')
            .send({ associateId: 466590 })
            .set('content-type', 'application/json')
            .then((response: any) => {
                expect(response.body.token).toBeDefined();
                expect(response.body.role).toBe('Associate');
                done();
            });
    });
});
