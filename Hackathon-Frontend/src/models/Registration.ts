export interface IAssociateModel {
    EventId?: string;
    AssociateId?: number;
    OwnTransport?: boolean;
    BoardingPoint?: string;
}

export interface IAssociateProps extends IAssociateState {
    updateAssociateDetails: (associateModel?: IAssociateModel) => void;
    saveRegistration: () => void;
}

export interface IAssociateContainerProps extends IAssociateState {
    updateAssociateDetails: (associateModel?: IAssociateModel) => void;
    updateAssociateSavedStatus: (eventState: boolean) => void;
    saveRegistration: (associateModel?: IAssociateModel) => void;
    eventId?: string;
}
export interface IAssociateState {
    associateModel?: IAssociateModel;
    isAssociateSaved?: boolean;
}
