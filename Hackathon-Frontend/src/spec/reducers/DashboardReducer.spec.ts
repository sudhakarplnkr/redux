import DashboardReducer from '../../reducers/DashboardReducer';
import { UPDATE_DASHBOARD } from '../../constants/Actions';

describe('DashboardReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        // Act
        const state = DashboardReducer({ registeredAssociate: [] }, {});

        // Assert
        expect(state).toEqual({ registeredAssociate: [] });
    });

    it('update state', () => {
        // Arrange

        const model = [{ FirstName: 'test', LastName: 'test' }];

        const action = { type: UPDATE_DASHBOARD, payload: { registeredAssociate: model } };
        // Act
        const state = DashboardReducer({ registeredAssociate: [] }, action);

        // Assert
        expect(state.registeredAssociate).toEqual(model);
    });
});
