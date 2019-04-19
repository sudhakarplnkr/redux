import { prop, Typegoose } from 'typegoose';

export class Log extends Typegoose {
    @prop()
    public Message: string;
    @prop()
    public Url?: string;
    @prop()
    public Line?: number;
    @prop()
    public Column?: number;
    @prop()
    public Error?: string;
}

export const LogModel = new Log().getModelForClass(Log);
