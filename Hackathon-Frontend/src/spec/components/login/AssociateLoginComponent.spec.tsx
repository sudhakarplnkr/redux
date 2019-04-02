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
});
