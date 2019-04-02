import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import DashboardContainer from '../../containers/DashboardContainer';
import shallowWithStore from '../shallowWithStore';

describe('DashboardContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            data: { }
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<DashboardContainer />, store);
        expect(component.length).toBe(1);
    });
});
