import { UPDATE_DASHBOARD } from '../constants/Actions';
import { IDashboardProps } from '../models/Dashboard';
const initialState = {
    registeredAssociate: []
} as IDashboardProps;

const DashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_DASHBOARD:            
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default DashboardReducer;
