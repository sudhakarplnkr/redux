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

    it('display selected event detail', () => {
        // Arrange
        const props = {
            EventTitle: 'Test Event Title',
            EventDescription: 'Test Event Description',
            _id: '1'
        } as IEvent;

        // Act
        const component = shallow(<EventDetailsComponent event={props} />);

        // Assert
        expect(component.find('.table-responsive tr td').get(0).props.children).toContain('Test Event Title');
        expect(component.find('div .text-justify').html()).toContain('Test Event Description');
    });
});
