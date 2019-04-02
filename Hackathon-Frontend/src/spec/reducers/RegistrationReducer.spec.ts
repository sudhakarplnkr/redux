import RegistrationReducer from '../../reducers/RegistrationReducer';
import { ON_ASSOCIATE_LOGIN } from '../../constants/Actions';
import { IAssociateState } from '../../models/Registration';

describe('RegistrationReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        const initialState: IAssociateState = {
            associateModel: {}
        };
        // Act
        const state = RegistrationReducer(initialState, {});

        // Assert
        expect(state).toEqual(initialState);
    });

    it('RegistrationReducer state', () => {
        // Arrange
        const model: IAssociateState = {
            associateModel: {
                EventId: '12313FDSFSF',
                AssociateId: 466590,
                OwnTranport: false,
                BoardingPoint: 'Tambaram'
            }
        };

        const action = { type: ON_ASSOCIATE_LOGIN, payload: model };
        // Act
        const state = RegistrationReducer(model, action);

        // Assert
        expect(state.associateModel).toEqual(model.associateModel);
    });
});
