import { REPORT_LOAD } from '../constants/Actions';

export const loadProjects = () => {
    return (dispatch: any) => {
        dispatch({
            type: REPORT_LOAD,
            payload: { project: [] }
        });
    };
};