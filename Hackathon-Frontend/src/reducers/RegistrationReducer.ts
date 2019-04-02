import { REGISTRATION_CHANGE, ON_ASSOCIATE_SAVE } from '../constants/Actions';
import { IAssociateState } from '../models/Registration';

const initialState: IAssociateState = {
    associateModel: {},
    isAssociateSaved: false
};

const RegistrationReduer = (state = initialState, action: any) => {
    switch (action.type) {
        case REGISTRATION_CHANGE:
            return {
                ...state, ...action.payload
            };
        case ON_ASSOCIATE_SAVE:
            return {
                ...state, ...action.payload
            };
        default:
            return state;
    }
};

export default RegistrationReduer;