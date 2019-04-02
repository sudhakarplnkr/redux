import * as bcrypt from 'bcrypt-nodejs';
import { prop, staticMethod, Typegoose } from 'typegoose';

export class User extends Typegoose {
  @staticMethod
  public static cryptPassword(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }

  @staticMethod
  public static comparePassword(
    password: string,
    hashPassword: string
  ): boolean {
    return bcrypt.compareSync(password, hashPassword);
  }

  public _id: string;

  @prop()
  public Username: string;
  @prop()
  public Password: string;
  @prop()
  public Email: string;
  @prop()
  public AssociateId: number;
  @prop()
  public FirstName: string;
  @prop()
  public LastName: string;
  @prop()
  public Phone: number;
  @prop()
  public Role: string;
}

export const UserModel = new User().getModelForClass(User);
