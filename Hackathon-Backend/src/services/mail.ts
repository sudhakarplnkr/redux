import * as Request from 'request';
import { EventModel } from '../models/event/event';
import { IMail } from '../models/mail';
import { numberToTime } from '../utils/DateTime';

export async function sendMail(to: number, eventId: string) {
    const result = await EventModel.findById(eventId);
    const event = result.toObject();
    const mailModel = { ...event, To: `${to}@cognizant.com`, FirstName: `${to}`, LastName: `${to}`, Date: new Date(event.EventDate).toDateString(), Time: numberToTime(event.StartTime) } as IMail;
    return new Promise((resolve: any) => {
        Request.post(
            {
                body: JSON.stringify(mailModel),
                headers: { 'content-type': 'application/json' },
                url: process.env.MAIL_MICROSERVICE_URL
            },
            (error: any, response: any) => (error ? resolve(error) : resolve(response))
        );
    });
}
