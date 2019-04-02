import { apiStart, apiEnd, showApiFailure, showApiSuccess } from '../../actions/api';
import * as rrs from 'react-redux-spinner';
import { API_START, API_END, SHOW_SUCCESS_MESSAGE, SHOW_FAILURE_MESSAGE } from '../../constants/Actions';
import { MessageConstants } from '../../constants/MessageConstants';

describe('api actions', () => {
    it('api start action', () => {
        // Act
        const action = apiStart();
        
        // Assert
        expect(action).toEqual({
            type: API_START,
            [rrs.pendingTask]: rrs.begin
        });
    });

    it('api end action', () => {
        // Act
        const action = apiEnd();
        
        // Assert
        expect(action).toEqual({
            type: API_END,
            [rrs.pendingTask]: rrs.end
        });
    });

    it('api error action', () => {
        // Arrange
        const error = MessageConstants.SERVER_ERROR;
        
        // Act
        const action = showApiFailure(error);
        
        // Assert
        expect(action).toEqual({
            type: SHOW_FAILURE_MESSAGE,
            payload: error
        });
    });

    it('api success action', () => {
        // Arrange
        const message = MessageConstants.SERVER_ERROR;

        // Act
        const action = showApiSuccess(message);
        
        // Assert
        expect(action).toEqual({
            type: SHOW_SUCCESS_MESSAGE,
            payload: message
        });
    });
});
