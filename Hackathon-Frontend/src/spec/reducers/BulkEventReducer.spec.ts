import BulkEventReducer from '../../reducers/BulkEventReducer';
import { UPDATE_BULK_EVENT } from '../../constants/Actions';
import { IBulkEventModel } from '../../models/Event';

describe('BulkEventReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        const initialState: IBulkEventModel = {
            fileParameter: {
                data: null,
                fileName: ''
            }
        };
        // Act
        const state = BulkEventReducer(initialState, {});

        // Assert
        expect(state.fileParameter).toEqual(initialState.fileParameter);
    });

    it('update state', () => {
        // Arrange
        const initialState: IBulkEventModel = {
            fileParameter: {
                data: new Blob(),
                fileName: 'test'
            }
        };

        const updatedFile = {
            data: new Blob(),
            fileName: 'test'
        };

        const action = { type: UPDATE_BULK_EVENT, payload: updatedFile };
        // Act
        const state = BulkEventReducer(initialState, action);

        // Assert
        expect(state.fileParameter).toEqual(updatedFile);
    });
});
