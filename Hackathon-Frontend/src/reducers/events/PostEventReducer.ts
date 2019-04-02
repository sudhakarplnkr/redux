import { POST_EVENT_CHANGE, ON_POST_EVENT_SAVE } from '../../constants/Actions';
import { IPostEventState } from '../../models/Event';

const initialState: IPostEventState = {
    postEvent: {}
};

const PostEventReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case POST_EVENT_CHANGE:
            return {
                ...state, ...action.payload
            };
        case ON_POST_EVENT_SAVE:
            return {

            };
        default:
            return state;
    }
};

export default PostEventReducer;