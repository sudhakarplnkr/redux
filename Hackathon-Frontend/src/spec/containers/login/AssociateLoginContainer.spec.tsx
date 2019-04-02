import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import AssociateLoginContainer from '../../../containers/login/AssociateLoginContainer';

describe('AssociateLoginContainer', () => {
    it('loading without crashing', () => {
        const testState = {
          login: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<AssociateLoginContainer />, store);
        expect(component.length).toBe(1);
    });
});
