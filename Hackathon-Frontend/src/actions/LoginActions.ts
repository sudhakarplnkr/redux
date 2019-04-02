import SessionManagement from '../utils/SessionManagement';
import { toastr } from 'react-redux-toastr';
import { MessageConstants } from '../constants/MessageConstants';
import { ILoginModel } from '../models/Login';
import { ON_ASSOCIATE_LOGIN, ON_LOGIN, CHANGE_ASSOCIATE_ID, CHANGE_LOGINMODEL, API, SHOW_FAILURE_MESSAGE } from '../constants/Actions';
import { Http } from '../constants/enum';

export const onAssociateLogin = (associateId?: number) => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: 'associate-login',
                method: Http.Post,
                data: {
                    associateId: associateId
                },
                onSuccess: (response: any) => {
                    if (!response.token) {
                        toastr.error(MessageConstants.LOGIN_TITLE_MESSAGE, MessageConstants.LOGIN_FAILED_MESSAGE);
                        return;
                    }
                    SessionManagement.SetToken({
                        associateId: response.associateId,
                        role: response.role,
                        token: response.token
                    });
                    dispatch({
                        type: ON_ASSOCIATE_LOGIN,
                        payload: { associateId: associateId, isAdmin: false }
                    });
                },
                onFailure: () => {
                    dispatch({
                        type: SHOW_FAILURE_MESSAGE,
                        payload: MessageConstants.SERVER_ERROR
                    });
                }
            }
        });
    };
};

export const onLogin = (loginModel: ILoginModel) => {
    return (dispatch: any) => {
        dispatch({
            type: API,
            payload: {
                url: 'login',
                method: Http.Post,
                data: {
                    username: loginModel.username,
                    password: loginModel.password
                },
                onSuccess: (response: any) => {
                    if (!response.token) {
                        toastr.error(MessageConstants.LOGIN_TITLE_MESSAGE, MessageConstants.LOGIN_FAILED_MESSAGE);
                        return;
                    }
                    SessionManagement.SetToken({
                        role: response.role,
                        token: response.token,
                        associateId: response.associateId
                    });
                    dispatch({
                        type: ON_LOGIN,
                        payload: { loginModel: loginModel }
                    });
                },
                onFailure: () => {
                    dispatch({
                        type: SHOW_FAILURE_MESSAGE
                    });
                }
            }
        });
    };
};

export const onAssociateIdChange = (associateId?: number) => {
    return (dispatch: any) => {
        dispatch({
            type: CHANGE_ASSOCIATE_ID,
            payload: associateId
        });
    };
};

export const onLoginModelChange = (loginModel?: ILoginModel) => {
    return (dispatch: any) => {
        dispatch({
            type: CHANGE_LOGINMODEL,
            payload: loginModel
        });
    };
};
