import { IBulkRegistrationModel } from '../models/BulkRegistration';
import { BULK_REGISTRATION_CHANGE } from '../constants/Actions';

const initialState: IBulkRegistrationModel = {
  fileParameter: {
    data: null,
    fileName: ''
  }
};

const BulkRegistrtionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case BULK_REGISTRATION_CHANGE:
      return {
        ...state,
        ...action.payload
      };    
    default:
      return state;
  }
};

export default BulkRegistrtionReducer;
