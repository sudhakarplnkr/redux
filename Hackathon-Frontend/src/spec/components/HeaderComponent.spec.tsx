import * as React from 'react';
import { shallow } from 'enzyme';
import HeaderComponent from '../../components/HeaderComponent';

describe('HeaderComponent', () => {
    it('loading without crashing', () => {
       // Act
        const header = shallow(<HeaderComponent />);

        // Assert
        expect(header.length).toBe(1);
    });
});
