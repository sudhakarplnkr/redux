import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import shallowWithStore from '../../shallowWithStore';
import BulkEventContainer from '../../../containers/events/BulkEventContainer';

describe('BulkEventContainer', () => {
    it('loading without crashing', () => {
        const testState = {
            bulkEvent: {}
        };
        const store = createMockStore(testState);
        const component = shallowWithStore(<BulkEventContainer />, store);
        expect(component.length).toBe(1);
    });
});
