import * as cote from 'cote';
import MailService from './services/MailService';

const responder = new cote.Responder({ name: 'mail sender responder' });

responder.on('registarion-mail', (request: any, callback: any) => {
    MailService.sendMail(request.data).then((result: any) => {
        console.log(`request: ${request.data.EventTitle} ${request.data.To} > ${result}`);
    });
    callback();
});

responder.on('heart-beat', (request: any, callback: any) => {
    try {
        const message = `Message from heart-beat, ${new Date()} - I am alive!!!`;
        console.log(`request: ${request.type} > ${message}`);
        callback(null, message);
    } catch (ex) {
        callback(JSON.stringify(ex), 'failed to recieve heart beat');
    }
});
