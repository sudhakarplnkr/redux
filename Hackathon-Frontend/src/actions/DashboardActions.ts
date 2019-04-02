import { UPDATE_DASHBOARD } from '../constants/Actions';

export const loadDashboard = () => {
    return (dispatch: any) => {
        dispatch({
            type: UPDATE_DASHBOARD,
            payload: []
        });
    };
};
