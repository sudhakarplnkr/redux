import { prop, staticMethod, Typegoose } from 'typegoose';

export class Associate extends Typegoose {
  @staticMethod
  public static isModelValid(associate: Associate): boolean {
    return !!associate.AssociateId && !!associate.EventId;
  }

  public _id: string;
  @prop({ required: true })
  public AssociateId: number;
  @prop({ required: true })
  public EventId: string;
  @prop()
  public OwnTransport?: boolean;
  @prop()
  public BoardingPoint?: string;
}

export const AssociateModel = new Associate().getModelForClass(Associate);
