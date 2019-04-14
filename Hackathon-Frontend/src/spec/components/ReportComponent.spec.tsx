import * as React from 'react';
import { shallow } from 'enzyme';
import ReportComponent from '../../components/ReportComponent';
import { IEvent } from '../../models/Event';

describe('ReportComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const events: IEvent[] = [];

        // Act
        const configuration = shallow(<ReportComponent events={events} />);

        // Assert
        expect(configuration.length).toBe(1);
    });
});
