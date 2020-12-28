import * as React from 'react';
import { shallow } from 'enzyme';
import EventDetailsComponent from '../../../components/events/EventDetailsComponent';
import { IEvent } from '../../../models/Event';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { PrivateRoute } from '../../../components/PrivateRoute/PrivateRoute';

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
