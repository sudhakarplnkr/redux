import DashboardReducer from '../../reducers/DashboardReducer';
import { UPDATE_DASHBOARD } from '../../constants/Actions';

describe('DashboardReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        // Act
        const state = DashboardReducer({}, {});

        // Assert
        expect(state).toEqual({});
    });

    it('update state', () => {
        // Arrange

        const model = [{ FirstName: 'test', LastName: 'test' }];

        const action = { type: UPDATE_DASHBOARD, payload: model };
        // Act
        const state = DashboardReducer({}, action);

        // Assert
        expect(state.dashboard).toEqual(model);
    });
});
