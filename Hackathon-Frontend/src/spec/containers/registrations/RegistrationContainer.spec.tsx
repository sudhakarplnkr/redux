import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import RegistrationContainer from '../../../containers/registrations/RegistrationContainer';
import shallowWithStore from '../../shallowWithStore';

describe('RegistrationContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            registration: {}
        };
        const routeParams = { params: {} };
        const store = createMockStore(testState);
        const component = shallowWithStore(<RegistrationContainer match={routeParams} />, store);
        expect(component.length).toBe(1);
    });
});
