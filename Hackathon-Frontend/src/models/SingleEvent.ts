import { IEvent } from './Event';

export interface ISingleEventModel extends IEvent {
}

export interface ISingleEventProps {
    updateEventDetails: (singleEvent?: ISingleEventModel) => void;
    eventDefaultValues?: IEventDefaultValueModel;
    submitEvent: () => void;
    favoriteEvent?: IEvent;
}

export interface ISingleEventContainerProps extends ISingleEventState {
    updateEventDetails: (singleEvent?: ISingleEventModel) => void;
    updateEventSavedStatus: (eventState: boolean) => void;
    getDefaultVelues(): void;
    submitEvent: (singleEvent?: ISingleEventModel) => void;
}

export interface ISingleEventState {
    singleEventModel?: ISingleEventModel;
    eventDefaultValues?: IEventDefaultValueModel;
    isEventSaved: boolean;
    event?: IEvent;
}

export interface IEventDefaultValueModel {
    beneficiary?: IBeneficiary[];
    council?: ICouncil[];
    project?: IProject[];
    eventCategory?: IEventCategory[];
    transportBoardingType?: ITransportBoardingType[];
}

export interface IBeneficiary {
    BeneficiaryName?: string;
}
export interface ICouncil {
    CouncilName?: string;
}
export interface IProject {
    ProjectName?: string;
}
export interface IEventCategory {
    EventCategoryName?: string;
}
export interface ITransportBoardingType {
    TransportBoardingType?: string;
}