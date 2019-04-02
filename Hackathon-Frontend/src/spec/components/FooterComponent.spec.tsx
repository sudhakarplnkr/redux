import * as React from 'react';
import { shallow } from 'enzyme';
import FooterComponent from '../../components/FooterComponent';

describe('FooterComponent', () => {
    it('loading without crashing', () => {
        const configuration = shallow(<FooterComponent />);
        expect(configuration.length).toBe(1);
    });
});
