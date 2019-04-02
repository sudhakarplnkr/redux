import * as React from 'react';
import { shallow } from 'enzyme';
import RegistrationComponent from '../../../components/registrations/RegistrationComponent';
import { IAssociateProps } from '../../../models/Registration';

describe('AssociateLoginComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IAssociateProps;

        // Act
        const component = shallow(<RegistrationComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });
});
