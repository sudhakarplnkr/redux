import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import SingleEventContainer from '../../../containers/events/SingleEventContainer';

describe('SingleEventContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            singleEvent: {},
            favoriteEvent: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<SingleEventContainer />, store);
        expect(component.length).toBe(1);
    });
});
