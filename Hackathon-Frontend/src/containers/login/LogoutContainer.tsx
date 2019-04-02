import * as React from 'react';
import { Redirect } from 'react-router';
import { ILogoutProps } from '../../models/Logout';
import SessionManagement from '../../utils/SessionManagement';

const LogoutComponent = (props: ILogoutProps) => {
    const handleOnLogout = (): void => {
        SessionManagement.RemoveToken();
        props.onLogout();
    };

    handleOnLogout();
    return <Redirect to="/associate-login" />;
};

export default LogoutComponent;
