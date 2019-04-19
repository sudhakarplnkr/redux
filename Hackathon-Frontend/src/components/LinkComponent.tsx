import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ILink } from '../models/App';
import { RoleTypes } from '../models/Login';

const LinksComponent = ({ links, isAuthenticated, role }: { links: ILink[]; isAuthenticated: boolean; role: RoleTypes }) => {
    if (!isAuthenticated) {
        links = [{ name: 'Login', to: '/login', roles: [RoleTypes.Anonymous] }];
    }

    const buildMenu = (menu: ILink[]) => {
        return menu
            .filter(u => u.roles.some((roleType: RoleTypes) => roleType === role) || (isAuthenticated && u.roles.some((type: RoleTypes) => type === RoleTypes.Anonymous)) || u.name === 'Login')
            .map((link: ILink) => {
                if (link.submenu) {
                    return (
                        <li key={link.name} className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {link.name} <span className="caret" />
                            </a>
                            <ul className="dropdown-menu" role="menu">
                                {buildMenu(link.submenu)}
                            </ul>
                        </li>
                    );
                }
                return (
                    <li key={link.name}>
                        <NavLink activeClassName="active" to={link.to} exact={true}>
                            {link.name}
                        </NavLink>
                    </li>
                );
            });
    };

    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid" />
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav menu-items">{buildMenu(links)}</ul>
            </div>
        </nav>
    );
};

export default LinksComponent;
