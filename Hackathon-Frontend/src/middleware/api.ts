import axios from 'axios';
import { apiEnd, showApiFailure, apiStart, showApiSuccess, accessDenied } from '../actions/api';
import { API, API_TRANSACTION } from '../constants/Actions';
import SessionManagement from '../utils/SessionManagement';
import { API_URL, BASE_URL } from '../utils/Environment';
import { Http } from '../constants/enum';
import { MessageConstants } from '../constants/MessageConstants';

const apiMiddleware = ({ dispatch }: { dispatch: any }) => (next: any) => (action: any) => {
    next(action);

    if (action.type !== API && action.type !== API_TRANSACTION) {
        return;
    }

    const { url, method, data, onSuccess, onFailure } = action.payload;
    const dataOrParams = [Http.Get, Http.Delete].includes(method) ? 'params' : 'data';

    // axios default configs
    const isLogin = url.indexOf('login') > -1;
    const apiUrl = `${isLogin ? BASE_URL : API_URL}${url}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['access-token'] = `${SessionManagement.GetAccessToken()}`;
    dispatch(apiStart());

    axios
        .request({ url: apiUrl, method, [dataOrParams]: data })
        .then((response: any) => {
            if (response.data.error) {
                if (action.type === API_TRANSACTION) {
                    dispatch(showApiFailure(response.data.error));
                }
                if (onFailure) {
                    onFailure();
                }
                return;
            }
            if (action.type === API_TRANSACTION) {
                dispatch(showApiSuccess(response.data.error));
            }
            if (onSuccess) {
                onSuccess(response.data);
            }
        })
        .catch(error => {
            if (error.message === 'Network Error') {
                dispatch(showApiFailure(MessageConstants.SERVER_ERROR));
                return;
            }
            if (action.type === API_TRANSACTION) {
                dispatch(showApiFailure(error));
            }
            if (onFailure) {
                onFailure();
            }

            if (error.response && error.response.status === 403) {
                accessDenied();
                return;
            }
        })
        .finally(() => {
            dispatch(apiEnd());
        });
};

export default apiMiddleware;
