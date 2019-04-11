import { loadRegisteredAssociate } from '../../actions/DashboardActions';
import { API } from '../../constants/Actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('load dashboard actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('loadDashboard action', () => {
        // Arrange
        // Act
        loadRegisteredAssociate()(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API);
    });
});
