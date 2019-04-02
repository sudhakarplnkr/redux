import { SINGLE_EVENT_CHANGE, ON_EVENT_SAVE } from '../../constants/Actions';
import { ISingleEventState, ISingleEventModel } from '../../models/SingleEvent';

const initialState: ISingleEventState = {
    singleEventModel: { event: {} } as ISingleEventModel,
    eventDefaultValues: {},
    isEventSaved: false
};

const SingleEventReduer = (state = initialState, action: any) => {
    switch (action.type) {
        case SINGLE_EVENT_CHANGE:
            return {
                ...state, ...action.payload
            };
        case ON_EVENT_SAVE:
            return {
                ...state,
                singleEventModel: {},
                eventDefaultValues: {},
                isEventSaved: action.payload
            };
        default:
            return state;
    }
};

export default SingleEventReduer;