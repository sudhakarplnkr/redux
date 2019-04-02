import * as React from 'react';
import { shallow } from 'enzyme';
import UpcomingEventsComponent from '../../components/events/UpcomingEventsComponent';
import { IEvent } from '../../models/Event';

describe('UpcomingEventsComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const events = [] as IEvent[];
        const onAddFavorite = jasmine.createSpy();
        const onRemoveFavorite = jasmine.createSpy();

        // Act
        const upcomingEvents = shallow(<UpcomingEventsComponent showFavorite={true} events={events} onAddFavorite={onAddFavorite} onRemoveFavorite={onRemoveFavorite} />);

        // // Assert
        expect(upcomingEvents.length).toBe(1);
    });
});
