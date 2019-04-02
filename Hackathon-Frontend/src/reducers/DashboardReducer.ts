import { UPDATE_DASHBOARD } from '../constants/Actions';
const initialState = {} as any;
const DashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_DASHBOARD:
            return {
                ...state,
                dashboard: action.payload
            };
        default:
            return state;
    }
};

export default DashboardReducer;
