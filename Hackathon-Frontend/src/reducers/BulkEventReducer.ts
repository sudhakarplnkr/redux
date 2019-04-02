import { IBulkEventModel } from '../models/Event';
import { UPDATE_BULK_EVENT } from '../constants/Actions';

const initialState: IBulkEventModel = {
  fileParameter: {
    data: null,
    fileName: ''
  }
};

const BulkEventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_BULK_EVENT:
      return {
        ...state,
        ...action.payload
      };    
    default:
      return state;
  }
};

export default BulkEventReducer;
