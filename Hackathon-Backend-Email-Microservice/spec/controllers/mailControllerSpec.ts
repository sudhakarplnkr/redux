import * as supertest from 'supertest';
import * as server from '../../src/server';
import { numberToTime } from '../../src/utils/DateTime';

describe('mail controller tests', () => {
    it('send mail for registered associate with event detail', (done: any) => {
        // Arrange
        const event = {
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
        };
        const mailModel = { ...event, To: `466590@cognizant.com`, FirstName: `Sudhakar`, LastName: `S`, Date: new Date().toDateString(), Time: numberToTime(11) };
        const app = supertest(server);
        app.post('/api/mail')
            .set('Accept', 'application/json')
            .send(mailModel)
            .expect(200, done);
    });
});
