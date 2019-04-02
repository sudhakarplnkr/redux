import { UPDATE_CONFIGURATION } from '../constants/Actions';
import { IConfigurationModel } from '../models/User';

const initialState: IConfigurationModel = {
  users: [],
  user: undefined
};

const ConfigurationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_CONFIGURATION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default ConfigurationReducer;
