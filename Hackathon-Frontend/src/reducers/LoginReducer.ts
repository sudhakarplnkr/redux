import {
  CHANGE_ASSOCIATE_ID,
  ON_LOGIN,
  ON_ASSOCIATE_LOGIN,
  CHANGE_LOGINMODEL,
  AP_ONLOGOUT
} from '../constants/Actions';
import { ILoginState } from '../models/Login';

const initialState: ILoginState = {
  associateId: undefined,
  isAuthenticated: false,
  loginModel: {}
};

const LoginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ON_ASSOCIATE_LOGIN:
      return {
        ...state,
        associateId: action.payload.associateId,
        isAuthenticated: true
      };
    case ON_LOGIN:
      return {
        ...state,
        loginModel: action.payload,
        isAuthenticated: true
      };
    case CHANGE_LOGINMODEL:
      return {
        ...state,
        loginModel: { ...state.loginModel, ...action.payload },
        isAuthenticated: false
      };
    case AP_ONLOGOUT:
      return {
        ...initialState
      };
    case CHANGE_ASSOCIATE_ID:
      return {
        ...initialState,
        associateId: action.payload
      };
    default:
      return state;
  }
};

export default LoginReducer;
