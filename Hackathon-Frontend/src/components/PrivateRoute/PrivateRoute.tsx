import * as React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';
import SessionManagement from '../../utils/SessionManagement';

interface IPrivateRouteProps extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}
type RenderComponent = (props: RouteComponentProps<any>) => React.ReactNode;

export class PrivateRoute extends Route<IPrivateRouteProps> {
    public render() {
        const { component: Component, ...rest }: IPrivateRouteProps = this.props;
        const renderComponent: RenderComponent = (props) => (
            SessionManagement.currentUser().token
                ? <Component {...props} />
                : <Redirect to="/associate-login" />
        );

        return (
            <Route {...rest} render={renderComponent} />
        );
    }
}