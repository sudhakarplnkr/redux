import * as React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../../../components/login/LoginComponent';
import { ILoginProps, ILoginModel } from '../../../models/Login';

describe('LoginComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as ILoginProps;

        // Act
        const component = shallow(<LoginComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('admin login submit button should be disabled when user not provided user name & password', () => {
        // Arrange
        const props = {} as ILoginProps;

        // Act
        const component = shallow(<LoginComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('admin login submit button should be disabled when user not provided user name & password', () => {
        // Arrange
        const props = {
            loginModel: {
                password: 'test',
                username: 'testuser'
            } as ILoginModel
        } as ILoginProps;

        // Act
        const component = shallow(<LoginComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeFalsy();
    });

    it('user name & password change event should trigger when user credential field filled', () => {
        // Arrange
        const props = {
            loginModel: {
                password: 'test',
                username: 'testuser'
            } as ILoginModel,
            onChange: jasmine.createSpy(),
            onLogin: jasmine.createSpy()
        } as ILoginProps;

        // Act
        const component = shallow(<LoginComponent {...props} />);
        component.find('[name="username"]').simulate('change', { target: { value: 'testuser' } });
        component.find('[name="password"]').simulate('change', { target: { value: 'password' } });

        // Assert
        expect(props.onChange).toHaveBeenCalledTimes(2);
    });

    it('associate login event should trigger when form get submitted', () => {
        // Arrange
        const props = {
            loginModel: {
                password: 'test',
                username: 'testuser'
            } as ILoginModel,
            onChange: jasmine.createSpy(),
            onLogin: jasmine.createSpy()
        } as ILoginProps;

        // Act
        const component = shallow(<LoginComponent {...props} />);
        component.find('button').simulate('click');

        // Assert
        expect(props.onLogin).toHaveBeenCalled();
    });
});
