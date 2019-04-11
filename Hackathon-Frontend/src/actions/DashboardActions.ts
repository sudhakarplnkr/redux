import { UPDATE_DASHBOARD, API } from '../constants/Actions';
import { Http } from '../constants/enum';

export const loadRegisteredAssociate = () => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: 'registered-associate',
                method: Http.Get,
                onSuccess: (response: any) => {
                    dispatch({
                        type: UPDATE_DASHBOARD,
                        payload: { registeredAssociate: response }
                    });
                }
            }
        });
    };
};
