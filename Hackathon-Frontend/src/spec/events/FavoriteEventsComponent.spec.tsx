import * as React from 'react';
import { shallow } from 'enzyme';
import FavoriteEventsComponent from '../../components/events/FavoriteEventsComponent';
import { IFavoriteEventComponentProps } from '../../models/FavoriteEvent';

describe('FavoriteEventsComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IFavoriteEventComponentProps;
        props.eventModel = {
            event: {},
            events: []
        };

        // Act
        const favoriteEvent = shallow(<FavoriteEventsComponent {...props} />);

        // Assert
        expect(favoriteEvent.length).toBe(1);
    });
});
