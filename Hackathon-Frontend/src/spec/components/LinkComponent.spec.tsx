import * as React from 'react';
import { shallow } from 'enzyme';
import LinksComponent from '../../components/LinkComponent';
import { RoleTypes } from '../../models/Login';

describe('LinkComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            links: [], isAuthenticated: false, role : RoleTypes.Anonymous
        };

        // Act
        const links = shallow(<LinksComponent {...props}/>);

        // Assert
        expect(links.length).toBe(1);
    });
});
