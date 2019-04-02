import * as React from 'react';
import { shallow } from 'enzyme';
import BulkEventComponent from '../../components/events/BulkEventComponent';
import { IBulkEventComponentProps } from 'src/models/Event';

describe('BulkEventComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {           
        } as IBulkEventComponentProps;

        // Act
        const bulkEvent = shallow(<BulkEventComponent {...props} />);

        // Assert
        expect(bulkEvent.length).toBe(1);
    });
});
