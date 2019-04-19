import * as cote from 'cote';
import { EventModel } from '../models/event/event';
import { IMail } from '../models/mail';
import { numberToTime } from '../utils/DateTime';
const requester = new cote.Requester({ name: 'mail sender requester' });

export async function sendMail(to: number, eventId: string, associateId: string) {
    const result = await EventModel.findById(eventId);
    return new Promise((resolve: any, _reject: any) => {
        if (result) {
            const event = result.toObject();
            const mailModel = { AssociateId: associateId, ...event, To: `${to}@cognizant.com`, FirstName: `${to}`, LastName: `${to}`, Date: new Date(event.EventDate).toDateString(), Time: numberToTime(event.StartTime) } as IMail;
            requester.send({ type: 'registarion-mail', data: mailModel }, (response: any) => {
                console.log(`registarion-mail > response - ${response}`);
            });
            resolve('mail will be sent to reciepent sooner.');
            return;
        }
        resolve({ error: 'Event not found' });
    });
}
