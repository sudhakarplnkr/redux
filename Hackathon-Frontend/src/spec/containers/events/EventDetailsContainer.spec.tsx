import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import EventDetailsContainer from '../../../containers/events/EventDetailsContainer';

describe('EventDetailsContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            event: {}
        };
        const routeParams = { params: {} };
        const store = createMockStore(testState);
        const component = shallowWithStore(<EventDetailsContainer match={routeParams} />, store);
        expect(component.length).toBe(1);
    });
});
