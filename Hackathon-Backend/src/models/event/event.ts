import { prop, Typegoose } from 'typegoose';

export class Event extends Typegoose {
    public _id: string;
    @prop({ required: true })
    public BenificiaryName: string;
    @prop({ required: true })
    public CouncilName: string;
    @prop({ required: true })
    public Project: string;
    @prop({ required: true })
    public EventCategory: string;
    @prop({ required: true })
    public EventTitle: string;
    @prop()
    public EventDescription: string;
    public Date: number;
    @prop({ required: true })
    public EventDate: Date;
    @prop({ required: true })
    public StartTime: number;
    @prop({ required: true })
    public EndTime: number;
    @prop({ required: true })
    public NoOfValunteersRequired: number;
    @prop({ required: true })
    public PocId: number;
    @prop({ required: true })
    public Location: string;
    @prop()
    public TransportBoardingType: string;
    @prop()
    public TransportBoardingPoint: string;
    @prop()
    public TransportDropPoint: string;
    @prop()
    public CreatedBy: string;
    @prop()
    public CreatedOn: Date;
    public IsUserFavorite: boolean;
    @prop()
    public VolunteerHours: number;
    @prop()
    public TravelHours: number;
    @prop()
    public LivesImpacted: number;
}

export const EventModel = new Event().getModelForClass(Event);
