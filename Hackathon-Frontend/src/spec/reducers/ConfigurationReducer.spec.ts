import ConfigurationReducer from '../../reducers/ConfigurationReducer';
import { UPDATE_CONFIGURATION } from '../../constants/Actions';
import { IUser } from '../../models/User';

describe('ConfigurationReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        // Act
        const state = ConfigurationReducer({}, {});

        // Assert
        expect(state).toEqual({});
    });

    it('update state', () => {
        // Arrange

        const model = {
          users: [],
          user: { FirstName: 'test', LastName: 'test'} as IUser
        };

        const action = { type: UPDATE_CONFIGURATION, payload: model };
        // Act
        const state = ConfigurationReducer({}, action);

        // Assert
        expect(state.user).toEqual(model.user);
    });
});
