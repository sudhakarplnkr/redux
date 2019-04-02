import * as React from 'react';
import { shallow } from 'enzyme';
import AssociateLoginComponent from '../../components/login/AssociateLoginComponent';
import { IAssociateLoginProps } from '../../models/Login';

describe('AssociateLoginComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IAssociateLoginProps;

        // Act
        const associateLogin = shallow(<AssociateLoginComponent {...props} />);

        // Assert
        expect(associateLogin.length).toBe(1);
    });
});
