import { API, SINGLE_EVENT_CHANGE, API_TRANSACTION, ON_EVENT_SAVE, POST_EVENT_CHANGE } from '../constants/Actions';
import { Http } from '../constants/enum';
import { ISingleEventModel } from '../models/SingleEvent';
import { IPostEvent } from '../models/Event';

export const getDefaultVelues = () => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: 'default-values',
                method: Http.Get,
                onSuccess: (response: any) => {
                    dispatch({
                        type: SINGLE_EVENT_CHANGE,
                        payload: { eventDefaultValues: response }
                    });
                }
            }
        });
    };
};

export const updateEventDetails = (singleEvent: ISingleEventModel) => {
    return (dispatch: any) => {
        dispatch({
            type: SINGLE_EVENT_CHANGE,
            payload: { singleEventModel: singleEvent }
        });
    };
};

export const updateEventSavedStatus = (isEventSaved: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: ON_EVENT_SAVE,
            payload: { isEventSaved: isEventSaved }
        });
    };
};

export const submitEvent = (singleEvent: ISingleEventModel) => {
    return (dispatch: any) => {
        dispatch({
            type: API_TRANSACTION,
            payload: {
                url: 'event',
                method: Http.Post,
                data: singleEvent,
                onSuccess: () => {
                    dispatch({
                        type: SINGLE_EVENT_CHANGE,
                        payload: { isEventSaved: true }
                    });
                }
            }
        });
    };
};

export const updatePostEventModel = (postEvent: IPostEvent) => {
    return (dispatch: any) => {
        dispatch({
            type: POST_EVENT_CHANGE,
            payload: { postEvent: postEvent }
        });
    };
};

export const savePostEvent = (postEvent: IPostEvent) => {
    return (dispatch: any) => {
        dispatch(updatePostEventModel(postEvent));
        dispatch({
            type: API_TRANSACTION,
            payload: {
                url: 'post-event-update',
                method: Http.Post,
                data: postEvent                
            }
        });
    };
};