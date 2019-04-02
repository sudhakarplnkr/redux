import * as React from 'react';
import LogoutComponent from '../../../containers/login/LogoutContainer';
import { shallow } from 'enzyme';
import { ILogoutProps } from 'src/models/Logout';

describe('LogoutContainer', () => {
    it('loading without crashing', () => {
        const props = {
            onLogout: jasmine.createSpy()
        } as ILogoutProps;
        const component = shallow(<LogoutComponent {...props} />);
        expect(component.length).toBe(1);
    });
});
