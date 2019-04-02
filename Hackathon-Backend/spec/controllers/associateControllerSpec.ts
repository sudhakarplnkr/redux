import * as request from 'request';
import * as supertest from 'supertest';
import { config } from '../../src/config/config';
import * as server from '../../src/server';

describe('routes test', () => {
    const user = { token: undefined };
    beforeAll((done: any) => {
        request.post(
            {
                body: JSON.stringify({ username: 'sudhakar', password: 'password' }),
                headers: { 'content-type': 'application/json' },
                url: `http://localhost:${config.port}/login`
            },
            (error, response) => {
                if (!error) {
                    const data = JSON.parse(response.body);
                    user.token = data.token;
                }
                done();
            }
        );
    });
    
    it('get all associate fails without token', (done: any) => {
        const app = supertest(server);
        app.get('/api/associate')
            .set('Accept', 'application/json')
            .expect(403, done);
    });

    it('get all associate', (done: any) => {
        const app = supertest(server);
        app.get('/api/associate')
            .set('Accept', 'application/json')
            .set('access-token', user.token)
            .expect(200, done);
    });
});
