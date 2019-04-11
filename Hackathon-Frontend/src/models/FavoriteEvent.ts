import { IEventModel, IEvent } from './Event';

export interface IFavoriteEventContainerProps extends IFavoriteEventComponentProps {
    loadFavoriteEvent: () => void;
    updateFavoriteEvents: (events: IEvent[]) => void;
}

export interface IFavoriteEventComponentProps {
    onRemoveFavorite: (eventId?: string) => void;
    onSelectFavorite: (event: IEvent) => void;
    eventModel: IEventModel;
}
