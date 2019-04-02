import { UPDATE_FAVORITE_EVENT } from '../constants/Actions';
import { IEventModel } from '../models/Event';

const initialState: IEventModel = {
  events: [],
  event: {}
};

const FavoriteEventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_FAVORITE_EVENT:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default FavoriteEventReducer;
