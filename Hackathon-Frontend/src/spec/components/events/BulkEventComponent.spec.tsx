import * as React from 'react';
import { shallow } from 'enzyme';
import BulkEventComponent from '../../../components/events/BulkEventComponent';
import { IBulkEventComponentProps } from '../../../models/Event';

describe('BulkEventComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IBulkEventComponentProps;

        // Act
        const component = shallow(<BulkEventComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });
});
