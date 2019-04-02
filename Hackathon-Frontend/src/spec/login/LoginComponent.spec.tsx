import * as React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../../components/login/LoginComponent';
import { ILoginProps } from '../../models/Login';

describe('LoginComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as ILoginProps;

        // Act
        const login = shallow(<LoginComponent {...props} />);

        // Assert
        expect(login.length).toBe(1);
    });
});
