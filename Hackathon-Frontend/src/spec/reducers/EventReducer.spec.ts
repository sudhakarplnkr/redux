import EventReducer from '../../reducers/EventReducer';
import { UPDATE_EVENT } from '../../constants/Actions';
import { IEventModel } from '../../models/Event';

describe('EventReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        const initialState: IEventModel = {
            event: {},
            events: []
        };

        // Act
        const state = EventReducer(initialState, {});

        // Assert
        expect(state).toEqual(initialState);
    });

    it('update state', () => {
        // Arrange      
        const model: IEventModel = {
            events: [{EventTitle: 'test'}],
            event: {}
        };

        const action = { type: UPDATE_EVENT, payload: model };
        // Act
        const state = EventReducer(model, action);

        // Assert
        expect(state.events).toEqual(model.events);
    });
});
