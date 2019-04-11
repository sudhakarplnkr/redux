import * as React from 'react';
import { shallow } from 'enzyme';
import AssociateLoginComponent from '../../../components/login/AssociateLoginComponent';
import { IAssociateLoginProps } from '../../../models/Login';

describe('AssociateLoginComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IAssociateLoginProps;

        // Act
        const component = shallow(<AssociateLoginComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('associate login submit button should be disabled when user not provided associate Id', () => {
        // Arrange
        const props = {} as IAssociateLoginProps;

        // Act
        const component = shallow(<AssociateLoginComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('associate login submit button should be enabled when user provides the associate Id', () => {
        // Arrange
        const props = {
            associateId: 466590
        } as IAssociateLoginProps;

        // Act
        const component = shallow(<AssociateLoginComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeFalsy();
    });

    it('associate id change event should trigger when associate id field filled', () => {
        // Arrange
        const props = {
            onAssociateLogin: jasmine.createSpy(),
            onChange: jasmine.createSpy()
        } as IAssociateLoginProps;

        // Act
        const component = shallow(<AssociateLoginComponent {...props} />);
        component.find('#associateId').simulate('change', { target: { value: 466590 } });

        // Assert
        expect(props.onChange).toHaveBeenCalled();
    });

    it('associate login event should trigger when form get submitted', () => {
        // Arrange
        const props = {
            onAssociateLogin: jasmine.createSpy(),
            onChange: jasmine.createSpy()
        } as IAssociateLoginProps;

        // Act
        const component = shallow(<AssociateLoginComponent {...props} />);        
        component.find('form').simulate('submit', { preventDefault: jasmine.createSpy() });

        // Assert
        expect(props.onAssociateLogin).toHaveBeenCalled();
    });
});
