import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import ConfigurationContainer from '../../containers/ConfigurationContainer';
import shallowWithStore from '../shallowWithStore';

describe('ConfigurationContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            configuration: { }
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<ConfigurationContainer />, store);
        expect(component.length).toBe(1);
    });
});
