import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import UpcomingEventsContainer from '../../../containers/events/UpcomingEventsContainer';

describe('UpcomingEventsContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            event: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<UpcomingEventsContainer />, store);
        expect(component.length).toBe(1);
    });
});
