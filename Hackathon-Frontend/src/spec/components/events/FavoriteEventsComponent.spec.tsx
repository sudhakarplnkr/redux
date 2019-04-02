import * as React from 'react';
import { shallow } from 'enzyme';
import FavoriteEventsComponent from '../../../components/events/FavoriteEventsComponent';
import { IFavoriteEventComponentProps } from '../../../models/FavoriteEvent';

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
});
