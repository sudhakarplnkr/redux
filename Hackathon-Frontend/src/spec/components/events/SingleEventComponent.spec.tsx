import * as React from 'react';
import { shallow } from 'enzyme';
import SingleEventComponent from '../../../components/events/SingleEventComponent';
import { ISingleEventProps } from '../../../models/SingleEvent';

describe('SingleEventComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as ISingleEventProps;

        // Act
        const component = shallow(<SingleEventComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });
});
