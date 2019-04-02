import { API, UPDATE_EVENT } from '../constants/Actions';
import { Http } from '../constants/enum';

export const getEvents = (isMyEvents?: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: isMyEvents ? 'my-event' : 'event',
                method: Http.Get,
                onSuccess: (response: any) => {
                    dispatch({
                        type: UPDATE_EVENT,
                        payload: { events: response }
                    });
                }
            }
        });
    };
};

export const getEvent = (eventId: string) => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: `event/${eventId}`,
                method: Http.Get,
                onSuccess: (response: any) => {
                    dispatch({
                        type: UPDATE_EVENT,
                        payload: { event: response }
                    });
                }
            }
        });
    };
};
