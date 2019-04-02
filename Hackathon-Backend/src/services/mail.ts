import * as Request from 'request';
import { config } from '../config/config';
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
                url: config.mailMicroserviceUrl
            },
            (error: any, response: any) => (error ? resolve(error) : resolve(response))
        );
    });
}
