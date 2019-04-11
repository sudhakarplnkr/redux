import * as React from 'react';
import { shallow } from 'enzyme';
import SingleEventComponent from '../../../components/events/SingleEventComponent';
import { ISingleEventProps } from '../../../models/SingleEvent';
import { IEvent } from '../../../models/Event';

describe('SingleEventComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as ISingleEventProps;

        // Act
        const component = shallow(<SingleEventComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('check upcoming event data title', () => {
        // Arrange
        const props = {
            favoriteEvent: { BenificiaryName: 'Test name', EventTitle: 'Test Title' } as IEvent
        } as ISingleEventProps;

        // Act
        const component = shallow(<SingleEventComponent {...props} />);

        // Assert
        expect(component.find('#eventTitle').html()).toContain('Test Title');
    });
});
