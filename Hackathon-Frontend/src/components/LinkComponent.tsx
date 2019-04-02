import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { ILink } from '../models/App';
import { RoleTypes } from '../models/Login';

const LinksComponent = ({ links, isAuthenticated, role }: { links: ILink[]; isAuthenticated: boolean; role: RoleTypes }) => {
    if (!isAuthenticated) {
        links = [{ name: 'Login', to: '/login', role: RoleTypes.Anonymous }];
    }
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <ul className="nav navbar-nav menu-items">
                    {links &&
                        links
                            .filter(u => u.role === role || (isAuthenticated && u.role === RoleTypes.Anonymous) || u.name === 'Login')
                            .map((link: ILink) => {
                                return (
                                    <li key={link.name}>
                                        <NavLink activeClassName="active" to={link.to} exact={true}>
                                            {link.name}
                                        </NavLink>
                                    </li>
                                );
                            })}
                </ul>
            </div>
        </nav>
    );
};

export default LinksComponent;
