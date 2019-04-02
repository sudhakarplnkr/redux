import ReportReducer from '../../reducers/ReportReducer';
import { REPORT_LOAD } from '../../constants/Actions';

describe('ReportReducer reducer', () => {
    it('initial state', () => {
        // Arrange
        // Act
        const state = ReportReducer({}, {});

        // Assert
        expect(state).toEqual({});
    });

    it('ReportReducer state', () => {
        // Arrange
        const model = { events: [{ Name: 'test' }] };

        const action = { type: REPORT_LOAD, payload: model };
        // Act
        const state = ReportReducer(model, action);

        // Assert
        expect(state.events).toEqual(model.events);
    });
});
