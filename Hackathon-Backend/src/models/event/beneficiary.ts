import { prop, Typegoose } from 'typegoose';

export class Beneficiary extends Typegoose {
  @prop()
  public BeneficiaryName: string;
}

export const BeneficiaryModel = new Beneficiary().getModelForClass(Beneficiary);
