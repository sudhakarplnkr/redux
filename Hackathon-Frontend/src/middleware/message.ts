import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_FAILURE_MESSAGE
} from '../constants/Actions';
import { toastr } from 'react-redux-toastr';
import { MessageConstants } from '../constants/MessageConstants';
const messageMiddleware = () => (next: any) => (action: any) => {
  switch (action.type) {
    case SHOW_SUCCESS_MESSAGE:
      toastr.success('', MessageConstants.SUCCESS_MESSAGE);
      break;
    case SHOW_FAILURE_MESSAGE:
      if (action.payload) {
        toastr.error('', action.payload);
        return;
      }
      toastr.error('', MessageConstants.FAILURE_MESSAGE);
      break;
    default:
      break;
  }
  next(action);
};

export default messageMiddleware;
