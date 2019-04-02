import { UPDATE_EVENT } from '../constants/Actions';
import { IEventModel } from '../models/Event';

const initialState: IEventModel = {
  events: [],
  event: {}
};

const EventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_EVENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default EventReducer;
