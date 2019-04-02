import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import ReportContainer from '../../containers/ReportContainer';
import shallowWithStore from '../shallowWithStore';

describe('ReportContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            data: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<ReportContainer />, store);
        expect(component.length).toBe(1);
    });
});
