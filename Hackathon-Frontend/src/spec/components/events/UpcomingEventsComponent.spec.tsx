import * as React from 'react';
import { shallow } from 'enzyme';
import UpcomingEventsComponent from '../../../components/events/UpcomingEventsComponent';
import { IEvent } from '../../../models/Event';

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

    it('check upcoming event data title', () => {
        // Arrange
        const props = {
            events: [{
                BenificiaryName: 'Test Benificiary',
                CouncilName: 'Test Council',
                EventTitle: 'Test Title',
                EventDescription: 'Test Description',
                _id: '1'
            }] as IEvent[],
            onRemoveFavorite: jasmine.createSpy(),
            onAddFavorite: jasmine.createSpy(),
            showFavorite: true
        };

        // Act
        const component = shallow(<UpcomingEventsComponent {...props} />);

        // Assert
        expect(component.find('div>h2>small').text()).toBe('Upcoming Events');
    });

    it('check upcoming event data', () => {
        // Arrange
        const props = {
            events: [{
                BenificiaryName: 'Test Benificiary',
                CouncilName: 'Test Council',
                EventTitle: 'Test Title',
                EventDescription: 'Test Description',
                IsUserFavorite: false,
                _id: '1'
            }] as IEvent[],
            onRemoveFavorite: jasmine.createSpy(),
            onAddFavorite: jasmine.createSpy(),
            showFavorite: true
        };

        // Act
        const component = shallow(<UpcomingEventsComponent {...props} />);
        // Assert
        expect(component.find('div>div>table>tbody>tr>td').contains('Test Description')).toBeTruthy();
    });
});
