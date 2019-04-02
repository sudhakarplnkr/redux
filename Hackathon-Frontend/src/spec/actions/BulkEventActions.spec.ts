import { bulkEventChange, upload } from '../../actions/BulkEventActions';
import { UPDATE_BULK_EVENT, API_START } from '../../constants/Actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FileParameter } from '../../utils/FileManagementClient';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe('bulk event actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('bulkEventChange action', () => {
        // Arrange
        const bulkEventModel = {};

        // Act
        bulkEventChange(bulkEventModel)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(UPDATE_BULK_EVENT);
    });

    it('bulkEventChange action', () => {
        // Arrange
        const associateId = '466590';
        const fileParameter = {
            data: new Blob(),
            fileName: 'test'
        } as FileParameter;

        // Act
        upload(associateId, fileParameter)(store.dispatch);

        // Assert
        expect(store.getActions()[0].type).toEqual(API_START);
    });
});
