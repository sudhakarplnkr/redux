import * as React from 'react';
import { shallow } from 'enzyme';
import LinksComponent from '../../components/LinkComponent';
import { RoleTypes } from '../../models/Login';
import { ILink } from '../../models/App';

describe('LinkComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            links: [], isAuthenticated: false, role: RoleTypes.Anonymous
        };

        // Act
        const links = shallow(<LinksComponent {...props} />);

        // Assert
        expect(links.length).toBe(1);
    });

    it('redirect to login if user is not authenticated', () => {
        // Arrange
        const props = {
            links: [{ name: 'Dashboard', roles: [RoleTypes.Associate], to: '/dashboard' }] as ILink[],
            isAuthenticated: false,
            role: RoleTypes.Anonymous
        };

        // Act
        const linksComponent = shallow(<LinksComponent {...props} />);

        // Assert
        expect(linksComponent.find('NavLink').prop('to')).toEqual('/login');
        expect(linksComponent.find('NavLink').children().text()).toBe('Login');
    });

    it('show links for authenticated user', () => {
        // Arrange
        const props = {
            links: [
                { name: 'Dashboard', roles: [RoleTypes.Admin], to: '/dashboard' },
                { name: 'Reports', roles: [RoleTypes.Admin], to: '/reports' }
            ] as ILink[],
            isAuthenticated: true,
            role: RoleTypes.Admin
        };

        // Act
        const linksComponent = shallow(<LinksComponent {...props} />);

        // Assert
        expect(linksComponent.find('li').length).toEqual(2);
        expect(linksComponent.find('li NavLink').first().prop('to')).toEqual('/dashboard');
    });
});
