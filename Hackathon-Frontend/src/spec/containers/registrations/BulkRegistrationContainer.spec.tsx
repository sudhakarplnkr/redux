import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import BulkRegistrationContainer from '../../../containers/registrations/BulkRegistrationContainer';
import shallowWithStore from '../../shallowWithStore';

describe('BulkRegistrationContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            bulkRegistration: {}
        };
        const routeParams = { params: {} };
        const store = createMockStore(testState);
        const component = shallowWithStore(<BulkRegistrationContainer match={routeParams} />, store);
        expect(component.length).toBe(1);
    });
});
