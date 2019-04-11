export interface IRegisteredAssociate {
    TotalRegisteredAssociate: number;
    EventTitle: string;
}

export interface IDashboardActionProps {
    loadRegisteredAssociate(): void;
}

export interface IDashboardProps {
    registeredAssociate: IRegisteredAssociate[];
}
