import SingleEventReducer from '../../../reducers/events/SingleEventReducer';
import { ISingleEventState, ISingleEventModel } from '../../../models/SingleEvent';
import { SINGLE_EVENT_CHANGE } from '../../../constants/Actions';

describe('SingleEventReducer reducer', () => {
    it('initial state', () => {
        // Arrange

        const initialState: ISingleEventState = {
            singleEventModel: { event: {} } as ISingleEventModel,
            eventDefaultValues: {},
            isEventSaved: false
        };
        // Act
        const state = SingleEventReducer(initialState, {});

        // Assert
        expect(state).toEqual(initialState);
    });

    it('update state', () => {
        // Arrange
        const model: ISingleEventState = {
            singleEventModel: { event: {} } as ISingleEventModel,
            eventDefaultValues: {},
            isEventSaved: true
        };

        const action = { type: SINGLE_EVENT_CHANGE, payload: model };
        // Act
        const state = SingleEventReducer(model, action);

        // Assert
        expect(state.isEventSaved).toBeTruthy();
    });
});
