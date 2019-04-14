import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import ReportContainer from '../../containers/ReportContainer';
import shallowWithStore from '../shallowWithStore';
import { IEventModel } from '../../models/Event';

describe('ReportContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            event: {
                event: {},
                events: []
            } as IEventModel
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<ReportContainer />, store);
        expect(component.length).toBe(1);
    });
});
