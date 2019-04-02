import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import FovoriteEventsContainer from '../../../containers/events/FovoriteEventsContainer';

describe('FovoriteEventsContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            favoriteEvent: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<FovoriteEventsContainer />, store);
        expect(component.length).toBe(1);
    });
});
