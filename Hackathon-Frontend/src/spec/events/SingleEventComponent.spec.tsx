import * as React from 'react';
import { shallow } from 'enzyme';
import SingleEventComponent from '../../components/events/SingleEventComponent';
import { ISingleEventProps } from '../../models/SingleEvent';

describe('SingleEventComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as ISingleEventProps;

        // Act
        const singleEvent = shallow(<SingleEventComponent {...props} />);

        // Assert
        expect(singleEvent.length).toBe(1);
    });
});
