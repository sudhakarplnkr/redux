import {
  API,
  UPDATE_CONFIGURATION,
  SHOW_SUCCESS_MESSAGE,
  API_TRANSACTION
} from '../constants/Actions';
import { Http } from '../constants/enum';
import { IUser, IConfigurationModel } from '../models/User';

export const getUsers = () => {
  return (dispatch: any) => {
    dispatch({
      type: API,
      payload: {
        url: 'user',
        method: Http.Get,
        onSuccess: (response: any) => {
          dispatch(updateConfigurationModel({ users: response }));
        }
      }
    });
  };
};

export const getUser = (userId: string) => {
  return (dispatch: any) => {
    dispatch({
      type: API,
      payload: {
        url: `user/${userId}`,
        method: Http.Get,
        data: null,
        onSuccess: () => {
          dispatch(clearUser());
        }
      }
    });
  };
};

export const saveUser = (user: IUser) => {
  return (dispatch: any) => {
    if (user._id) {
      dispatch(editUser(user, user._id));
      return;
    }
    dispatch(addUser(user));
  };
};

export const addUser = (user: IUser) => {
  return (dispatch: any) => {
    dispatch({
      type: API_TRANSACTION,
      payload: {
        url: `user`,
        method: Http.Post,
        data: user,
        onSuccess: () => {          
          dispatch(clearUser());
          dispatch(getUsers());
        }
      }
    });
  };
};

export const editUser = (user: IUser, userId?: string) => {
  return (dispatch: any) => {
    dispatch({
      type: API_TRANSACTION,
      payload: {
        url: `user/${userId}`,
        method: Http.Put,
        data: user,
        onSuccess: () => {         
          dispatch(clearUser());
          dispatch(getUsers());
        }
      }
    });
  };
};

export const deleteUser = (user: IUser) => {
  return (dispatch: any) => {
    dispatch({
      type: API_TRANSACTION,
      payload: {
        url: `user/${user._id}`,
        method: Http.Delete,
        onSuccess: () => {
          dispatch({
            type: SHOW_SUCCESS_MESSAGE
          });
          dispatch(clearUser());
          dispatch(getUsers());
        }
      }
    });
  };
};

export const clearUser = () => {
  return (dispatch: any) => {
    dispatch(
      updateConfigurationModel({
        user: {},
        isAdd: false,
        isEdit: false,
        isDelete: false
      })
    );
  };
};

export const updateConfigurationModel = (
  configurationModel: IConfigurationModel
) => {
  return (dispatch: any) => {
    dispatch({
      type: UPDATE_CONFIGURATION,
      payload: configurationModel
    });
  };
};
