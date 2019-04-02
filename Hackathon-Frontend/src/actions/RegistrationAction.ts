import { REGISTRATION_CHANGE, API_TRANSACTION, ON_ASSOCIATE_SAVE } from '../constants/Actions';
import { Http } from '../constants/enum';
import { IAssociateModel } from '../models/Registration';

export const updateAssociateDetails = (associate: IAssociateModel) => {
    return (dispatch: any) => {
        dispatch({
            type: REGISTRATION_CHANGE,
            payload: { associateModel: associate }
        });
    };
};

export const updateAssociateSavedStatus = (isAssociateSaved: boolean) => {
    return (dispatch: any) => {
        dispatch({
            type: ON_ASSOCIATE_SAVE,
            payload: { isAssociateSaved: isAssociateSaved }
        });
    };
};

export const saveRegistration = (associate: IAssociateModel) => {
    return (dispatch: any) => {
        dispatch(updateAssociateDetails(associate));
        dispatch({
            type: API_TRANSACTION,
            payload: {
                url: 'associate',
                method: Http.Post,
                data: associate,
                onSuccess: (response: any) => {
                    console.log(response);
                }
            }
        });
    };
};