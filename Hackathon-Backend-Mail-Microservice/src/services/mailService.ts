import * as nodeMailer from 'nodemailer';
import * as smtpTransport from 'nodemailer-smtp-transport';
import { String } from 'typescript-string-operations';
import { config } from '../config/config';
import { IMail } from '../models/mail';

class MailService {
    public sendMail(event: IMail) {
        const transporter = nodeMailer.createTransport(smtpTransport(config.mailSetting));
        const mailOptions = {
            from: config.mailSetting.from,
            html: String.Format(config.mailSetting.emailBody, event),
            subject: config.mailSetting.subject,
            to: event.To
        };
        return transporter.sendMail(mailOptions);
    }
}

export default new MailService();
