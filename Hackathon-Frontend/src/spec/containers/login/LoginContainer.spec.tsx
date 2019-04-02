import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import LoginContainer from '../../../containers/login/LoginContainer';

describe('LoginContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            login: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<LoginContainer />, store);
        expect(component.length).toBe(1);
    });
});
