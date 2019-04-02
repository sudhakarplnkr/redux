import { prop, Typegoose } from 'typegoose';

export class Council extends Typegoose {
  @prop()
  public CouncilName: string;
}

export const CouncilModel = new Council().getModelForClass(Council);
