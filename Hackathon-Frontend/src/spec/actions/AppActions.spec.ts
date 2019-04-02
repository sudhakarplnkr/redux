import { onLogout } from '../../actions/AppActions';
import { AP_ONLOGOUT } from '../../constants/Actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('App actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('logout action', () => {
        // Arrange
        // Act
        onLogout()(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(AP_ONLOGOUT);
    });
});
