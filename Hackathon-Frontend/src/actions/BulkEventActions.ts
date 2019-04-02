import { FileParameter } from '../utils/FileManagementClient';
import { default as service } from '../utils/service';
import {
  UPDATE_BULK_EVENT,
  SHOW_SUCCESS_MESSAGE,
  SHOW_FAILURE_MESSAGE
} from '../constants/Actions';
import { apiStart, apiEnd } from './api';
import { IBulkEventModel } from '../models/Event';

export const bulkEventChange = (
  bulkEventModel: IBulkEventModel
) => {
  return (dispatch: any) => {
    dispatch({
      type: UPDATE_BULK_EVENT,
      payload: bulkEventModel
    });
  };
};

export const upload = (associateId: string, fileParameter: FileParameter) => {
  return (dispatch: any) => {
    dispatch(apiStart());
    service.FileManagementClient.upload('api/bulk-event', `${associateId}`, fileParameter)
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
        dispatch(bulkEventChange({ fileParameter: undefined }));
      })
      .finally(() => {
        dispatch(apiEnd());
      });
  };
};
