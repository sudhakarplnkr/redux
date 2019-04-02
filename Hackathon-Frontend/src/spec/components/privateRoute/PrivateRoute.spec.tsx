import * as React from 'react';
import { shallow } from 'enzyme';
import { PrivateRoute } from '../../../components/privateRoute/PrivateRoute';
import EventDetailsComponent from '../../../components/events/EventDetailsComponent';
import { IEvent } from '../../../models/Event';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

describe('PrivateRoute', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IEvent;
        const eventConponent = <EventDetailsComponent event={props} />;

        // Act
        const component = shallow(
            <Router history={createMemoryHistory()}>
                <PrivateRoute component={() => eventConponent} />
            </Router>
        );

        // Assert
        expect(component.length).toBe(1);
    });
});
