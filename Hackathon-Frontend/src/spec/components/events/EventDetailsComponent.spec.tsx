import * as React from 'react';
import { shallow } from 'enzyme';
import EventDetailsComponent from '../../../components/events/EventDetailsComponent';
import { IEvent } from '../../../models/Event';

describe('EventDetailsComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IEvent;

        // Act
        const component = shallow(<EventDetailsComponent event={props} />);

        // Assert
        expect(component.length).toBe(1);
    });
});
