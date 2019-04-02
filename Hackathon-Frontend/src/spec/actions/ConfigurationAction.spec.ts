import { getUsers, getUser, saveUser, addUser, editUser, deleteUser, clearUser, updateConfigurationModel } from '../../actions/ConfigurationAction';
import { API, API_TRANSACTION, UPDATE_CONFIGURATION } from '../../constants/Actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('configuration actions', () => {
    
    beforeEach(() => {
        store.clearActions();
    });

    it('get all user action', () => {
        // Act
        getUsers()(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API);
    });

    it('get user action', () => {
        // Arrange
        const userId = 'ADSFAWE123123';

        // Act
        getUser(userId)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API);
    });

    it('save user action', () => {
        // Arrange
        const user = {};

        // Act
        saveUser(user)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API_TRANSACTION);
    });

    it('add user action', () => {
        // Arrange
        const user = {};

        // Act
        addUser(user)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API_TRANSACTION);
    });

    it('editUser action', () => {
        // Arrange
        const user = {};
        const userId = 'ADSFAWE123123';

        // Act
        editUser(user, userId)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API_TRANSACTION);
    });

    it('deleteUser action', () => {
        // Arrange
        const user = {};

        // Act
        deleteUser(user)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API_TRANSACTION);
    });

    it('clearUser action', () => {
        // Arrange

        // Act
        clearUser()(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(UPDATE_CONFIGURATION);
    });

    it('updateConfigurationModel action', () => {
        // Arrange
        const configurationModel = {};
        // Act
        updateConfigurationModel(configurationModel)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(UPDATE_CONFIGURATION);
    });
});
