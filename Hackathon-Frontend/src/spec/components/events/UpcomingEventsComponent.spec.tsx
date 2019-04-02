import * as React from 'react';
import { shallow } from 'enzyme';
import UpcomingEventsComponent from '../../../components/events/UpcomingEventsComponent';

describe('UpcomingEventsComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            events: [],
            onRemoveFavorite: jasmine.createSpy(),
            onAddFavorite: jasmine.createSpy(),
            showFavorite: true
        };

        // Act
        const component = shallow(<UpcomingEventsComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });
});
