import * as React from 'react';
import { shallow } from 'enzyme';
import BulkRegistrationComponent from '../../components/registrations/BulkRegistrationComponent';
import { IBulkRegistrationProps } from '../../models/BulkRegistration';

describe('BulkRegistrationComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IBulkRegistrationProps;

        // Act
        const bulkRegistration = shallow(<BulkRegistrationComponent {...props} />);

        // Assert
        expect(bulkRegistration.length).toBe(1);
    });
});
