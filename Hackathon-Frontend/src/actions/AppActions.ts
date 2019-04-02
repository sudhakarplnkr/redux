import SessionManagement from '../utils/SessionManagement';
import { AP_ONLOGOUT } from '../constants/Actions';

export const onLogout = () => {
    SessionManagement.RemoveToken();
    return (dispatch: any) => {
        dispatch({
            type: AP_ONLOGOUT            
        });     
    };
};
