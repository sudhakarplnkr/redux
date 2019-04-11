import { prop, Typegoose } from 'typegoose';

export class TransportBoardingType extends Typegoose {
    @prop()
    public TransportBoardingType: string;
}

export const TransportBoardingTypeModel = new TransportBoardingType().getModelForClass(TransportBoardingType, { schemaOptions: { collection: 'TransportBoardingType' } });
