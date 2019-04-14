import { FileParameter } from '../utils/FileManagementClient';

export interface IReportContainerProps {
    loadEvents: () => void;
    events: IEvent[];
}

export interface IUpcomingEventsContainerProps {
    loadEvents: (isMyEvents?: boolean) => void;
    updateEvents: (events: IEvent[]) => void;
    addFavoriteEvent: (eventId: string) => void;
    removeFavoriteEvent: (eventId: string) => void;
    eventModel: IEventModel;
    isMyEvents?: boolean;
}

export interface IEventsDetailContainerProps {
    loadEvent: (eventId: string) => void;
    eventId: string;
    event: IEvent;
}

export interface IEventModel {
    events: IEvent[];
    event: IEvent;
}

export interface IEvent {
    _id?: string;
    BenificiaryName?: string;
    CouncilName?: string;
    Project?: string;
    EventCategory?: string;
    EventTitle?: string;
    EventDescription?: string;
    EventDate?: Date;
    StartTime?: number;
    EndTime?: number;
    NoOfValunteersRequired?: number;
    PocId?: number;
    Location?: string;
    TransportBoardingType?: string;
    TransportBoardingPoint?: string;
    TransportDropPoint?: string;
    CreatedBy?: string;
    CreatedOn?: Date;
    IsUserFavorite?: boolean;
    VolunteerHours?: number;
    TravelHours?: number;
    LivesImpacted?: number;
}

export interface IBulkEventModel {
    fileParameter?: FileParameter;
}

export interface IBulkEventComponentProps extends IBulkEventModel {
    onUploadChange: (fileParameter: FileParameter) => void;
    onUpload: (fileParameter?: FileParameter) => void;
    bulkRegistrationChange?: (bulkRegistrationModel: IBulkEventModel) => void;
}

export interface IBulkEventContainerProps extends IBulkEventModel {
    bulkEventChange: (bulkRegistrationModel: IBulkEventModel) => void;
    upload: (eventId: string, fileParameter: FileParameter) => void;
}

// Post Event Models
export interface IPostEventComponentProps extends IBulkEventModel {
    updatePostEventModel: (postEvent: IPostEvent) => void;
    save: () => void;
}

export interface IPostEventContainerProps extends IBulkEventModel {
    postEvent?: IPostEvent;
    eventId?: string;
    updatePostEventModel: (postEvent: IPostEvent) => void;
    savePostEvent: (postEvent: IPostEvent) => void;
}

export interface IPostEvent {
    EventId?: string;
    VolunteerHours?: string;
    TravelHours?: string;
    LivesImpacted?: number;
}

export interface IPostEventState {
    postEvent: IPostEvent;
}
