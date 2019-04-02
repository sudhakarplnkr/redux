import { IBulkRegistrationModel } from '../models/BulkRegistration';
import { FileParameter } from '../utils/FileManagementClient';
import { default as service } from '../utils/service';
import {
  BULK_REGISTRATION_CHANGE,
  SHOW_SUCCESS_MESSAGE,
  SHOW_FAILURE_MESSAGE
} from '../constants/Actions';
import { apiStart, apiEnd } from './api';

export const bulkRegistrationChange = (
  bulkRegistrationModel: IBulkRegistrationModel
) => {
  return (dispatch: any) => {
    dispatch({
      type: BULK_REGISTRATION_CHANGE,
      payload: bulkRegistrationModel
    });
  };
};

export const registration = (eventId: string, fileParameter: FileParameter) => {
  return (dispatch: any) => {
    dispatch(apiStart());
    service.FileManagementClient.upload('api/bulk-associate', eventId, fileParameter)
      .then((response: any) => {
        if (response.error && response.error.length > 0) {
          const errors: any[] = response.error;
          errors.map(({ error }: { error: any }) => {
            dispatch({
              type: SHOW_FAILURE_MESSAGE,
              payload: error
            });
          });
        } else {
          dispatch({
            type: SHOW_SUCCESS_MESSAGE
          });
        }
        dispatch(bulkRegistrationChange({ fileParameter: undefined }));
      })
      .finally(() => {
        dispatch(apiEnd());
      });
  };
};
