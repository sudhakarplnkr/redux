import * as React from 'react';
import { shallow } from 'enzyme';
import EventDetailsComponent from '../../components/events/EventDetailsComponent';

describe('EventDetailsComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            event: {}
        };

        // Act
        const eventDetail = shallow(<EventDetailsComponent {...props} />);

        // Assert
        expect(eventDetail.length).toBe(1);
    });
});
