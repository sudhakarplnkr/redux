import { prop, Typegoose } from 'typegoose';

export class FavoriteEvent extends Typegoose {
    @prop({ required: true })
    public UserId: string;
    @prop({ required: true })
    public EventId: string;   
}

export const FavoriteEventModel = new FavoriteEvent().getModelForClass(FavoriteEvent);
