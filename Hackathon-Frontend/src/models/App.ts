import { RoleTypes } from './Login';

export interface IAppProps {
    isAuthenticated: boolean;
    onLogout(): void;    
    role: RoleTypes;
}

export interface IAppState {
    isAuthenticated: boolean;
}

export interface ILink {
    name: string;
    to: string;
    roles: RoleTypes[];
    submenu?: ILink[];
}
