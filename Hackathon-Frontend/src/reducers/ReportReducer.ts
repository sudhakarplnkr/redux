import { REPORT_LOAD } from '../constants/Actions';

const ReportReducer = (state = {}, action: any) => {
    switch (action.type) {
        case REPORT_LOAD:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default ReportReducer;
