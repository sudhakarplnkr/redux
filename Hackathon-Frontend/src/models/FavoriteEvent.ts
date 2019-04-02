import { IEventModel, IEvent } from './Event';

export interface IFavoriteEventContainerProps extends IFavoriteEventComponentProps {
    loadFavoriteEvent: () => void;
}

export interface IFavoriteEventComponentProps {
    onRemoveFavorite: (eventId?: string) => void;
    onSelectFavorite: (event: IEvent) => void;
    eventModel: IEventModel;
}
