import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import AccessDeniedComponent from '../../containers/AccessDenied';
import shallowWithStore from '../shallowWithStore';
import { IAppProps } from 'src/models/App';

describe('AccessDeniedComponent', () => {
    it('loading without crashing', () => {
        const props = {} as IAppProps;
        const store = createMockStore({});
        const component = shallowWithStore(<AccessDeniedComponent {...props} />, store);
        expect(component.length).toBe(1);
    });
});
