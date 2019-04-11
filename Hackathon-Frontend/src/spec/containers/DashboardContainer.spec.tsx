import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import DashboardContainer from '../../containers/DashboardContainer';
import shallowWithStore from '../shallowWithStore';
import { IDashboardProps } from '../../models/Dashboard';

describe('DashboardContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            dashboard: { registeredAssociate: [] } as IDashboardProps
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<DashboardContainer />, store);
        expect(component.length).toBe(1);
    });
});
