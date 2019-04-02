import BulkRegistrtionReducer from '../../reducers/BulkRegistrtionReducer';
import { BULK_REGISTRATION_CHANGE } from '../../constants/Actions';

describe('BulkRegistrtionReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        // Act
        const state = BulkRegistrtionReducer({}, {});

        // Assert
        expect(state).toEqual({});
    });

    it('update state', () => {
        // Arrange

        const updatedFile = {
            data: new Blob(),
            fileName: 'test'
        };

        const action = { type: BULK_REGISTRATION_CHANGE, payload: {fileParameter: updatedFile} };
        // Act
        const state = BulkRegistrtionReducer({}, action);

        // Assert
        expect(state.fileParameter).toEqual(updatedFile);
    });
});
