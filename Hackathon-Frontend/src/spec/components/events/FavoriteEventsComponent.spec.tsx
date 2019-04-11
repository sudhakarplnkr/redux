import * as React from 'react';
import { shallow } from 'enzyme';
import FavoriteEventsComponent from '../../../components/events/FavoriteEventsComponent';
import { IFavoriteEventComponentProps } from '../../../models/FavoriteEvent';
import { IEvent } from '../../../models/Event';

describe('FavoriteEventsComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            eventModel: {
                events: [],
                event: {}
            },
            onRemoveFavorite: jasmine.createSpy(),
            onSelectFavorite: jasmine.createSpy()
        } as IFavoriteEventComponentProps;

        // Act
        const component = shallow(<FavoriteEventsComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('favorite event should load in the grid view', () => {
        // Arrange
        const props = {
            eventModel: {
                events: [
                    {
                        EventTitle: 'Test Title',
                        EventDescription: 'Test Description',
                        _id: '1'
                    } as IEvent,
                    {
                        EventTitle: 'Test Title',
                        EventDescription: 'Test Description',
                        _id: '2'
                    } as IEvent
                ],
                event: {}
            },
            onRemoveFavorite: jasmine.createSpy(),
            onSelectFavorite: jasmine.createSpy()
        } as IFavoriteEventComponentProps;

        // Act
        const component = shallow(<FavoriteEventsComponent {...props} />);

        // Assert
        expect(component.find('tbody > tr').length).toBe(2);
    });
});
