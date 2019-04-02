import { prop, Typegoose } from 'typegoose';

export class EventCategory extends Typegoose {
  @prop()
  public EventCategoryName: string;
}

export const EventCategoryModel = new EventCategory().getModelForClass(
  EventCategory
);
