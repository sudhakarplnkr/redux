import LoginReducer from '../../reducers/LoginReducer';
import { ON_ASSOCIATE_LOGIN } from '../../constants/Actions';
import { ILoginState } from '../../models/Login';

describe('LoginReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        const initialState: ILoginState = {
          associateId: undefined,
          isAuthenticated: false,
          loginModel: {}
        };
        // Act
        const state = LoginReducer(initialState, {});

        // Assert
        expect(state).toEqual(initialState);
    });

    it('authenticate user state', () => {
        // Arrange      
        const model: ILoginState = {
          associateId: 466590,
          isAuthenticated: true,
          loginModel: {}
        };

        const action = { type: ON_ASSOCIATE_LOGIN, payload: model };
        // Act
        const state = LoginReducer(model, action);

        // Assert
        expect(state.associateId).toEqual(model.associateId);
        expect(state.isAuthenticated).toBeTruthy();
    });
});
