import { API, UPDATE_FAVORITE_EVENT, API_TRANSACTION } from '../constants/Actions';
import { Http } from '../constants/enum';
import { IEvent } from '../models/Event';

export const getFavoriteEvent = () => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: 'favorite-event',
                method: Http.Get,
                onSuccess: (response: any) => {
                    dispatch({
                        type: UPDATE_FAVORITE_EVENT,
                        payload: { events: response }
                    });
                }
            }
        });
    };
};

export const addFavoriteEvent = (callback: any, eventId?: string) => {
    return (dispatch: any) => {
        dispatch({
            type: API_TRANSACTION,
            payload: {
                url: `favorite-event`,
                method: Http.Post,
                data: { eventId: eventId },
                onSuccess: () => {
                    dispatch(callback());
                }
            }
        });
    };
};

export const removeFavoriteEvent = (callback: any, eventId?: string) => {
    return (dispatch: any) => {
        dispatch({
            type: API_TRANSACTION,
            payload: {
                url: `favorite-event/${eventId}`,
                method: Http.Delete,
                onSuccess: () => {
                    dispatch(callback());
                }
            }
        });
    };
};

export const updateFavoriteEvent = (event: IEvent) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE_FAVORITE_EVENT,
            payload: { event: event }
        });
    };
};

export const updateFavoriteEvents = (events: IEvent[]) => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE_FAVORITE_EVENT,
            payload: { events: events }
        });
    };
};
