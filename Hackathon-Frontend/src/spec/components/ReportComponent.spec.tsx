import * as React from 'react';
import { shallow } from 'enzyme';
import ReportComponent from '../../components/ReportComponent';

describe('ReportComponent', () => {
    it('loading without crashing', () => {
        // Act
        const configuration = shallow(<ReportComponent />);

        // Assert
        expect(configuration.length).toBe(1);
    });
});
