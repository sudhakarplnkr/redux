import * as React from 'react';
import { shallow } from 'enzyme';
import BulkRegistrationComponent from '../../../components/registrations/BulkRegistrationComponent';
import { IBulkRegistrationProps } from 'src/models/BulkRegistration';

describe('BulkRegistrationComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });
});
