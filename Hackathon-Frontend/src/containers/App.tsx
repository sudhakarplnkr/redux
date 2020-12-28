import * as React from 'react';
import { connect } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { onLogout } from '../actions/AppActions';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import LinksComponent from '../components/LinkComponent';
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute';
import { IAppProps, ILink } from '../models/App';
import SessionManagement from '../utils/SessionManagement';
import ConfigurationContainer from './ConfigurationContainer';
import Dashboard from './DashboardContainer';
import AssociateLoginContainer from './login/AssociateLoginContainer';
import LogoutContainer from './login/LogoutContainer';
import ReportContainer from './ReportContainer';
import { RoleTypes } from '../models/Login';
import EventDetailContainer from './events/EventDetailsContainer';
import BulkRegistrationContainer from './registrations/BulkRegistrationContainer';
import PostEventUpdateContainer from './events/PostEventUpdateContainer';
import PostEventUpdateDetailsContainer from './events/PostEventUpdateDetailsContainer';
import LoginContainer from './login/LoginContainer';
import BulkEventContainer from './events/BulkEventContainer';
import SingleEventContainer from './events/SingleEventContainer';
import FovoriteEventsContainer from './events/FovoriteEventsContainer';
import UpcomingEventsContainer from './events/UpcomingEventsContainer';
import AccessDeniedComponent from './AccessDenied';
import RegistrationContainer from './registrations/RegistrationContainer';

class AppComponent extends React.Component<IAppProps, {}> {
    public render() {
        const menuLinks: ILink[] = [
            { name: 'Dashboard', to: '/', roles: [RoleTypes.Admin] },
            {
                name: 'Events',
                to: '',
                submenu: [{ name: 'Upcoming Events', to: '/upcoming-events', roles: [RoleTypes.Admin, RoleTypes.Associate] }, { name: 'My Events', to: '/my-events', roles: [RoleTypes.Admin, RoleTypes.Associate] }, { name: 'Event Upload', to: '/event-upload', roles: [RoleTypes.Admin] }, { name: 'Favorite Events', to: '/fovorite-events', roles: [RoleTypes.Admin] }, { name: 'Post Event Update', to: '/post-event-update', roles: [RoleTypes.Admin] }],
                roles: [RoleTypes.Admin, RoleTypes.Associate]
            },
            { name: 'Report', to: '/report', roles: [RoleTypes.Admin] },
            { name: 'Configuration', to: '/configuration', roles: [RoleTypes.Admin] },
            { name: 'Logout', to: '/logout', roles: [RoleTypes.Anonymous] }
        ];

        return (
            <React.Fragment>
                <Header />
                <HashRouter>
                    <React.Fragment>
                        <LinksComponent links={menuLinks} isAuthenticated={this.props.isAuthenticated} role={this.props.role} />
                        <PrivateRoute path="/" exact={true} component={Dashboard} />
                        <Route path="/associate-login" component={() => <AssociateLoginContainer />} />
                        <Route path="/login" component={() => <LoginContainer />} />
                        <Route path="/logout" component={() => <LogoutContainer onLogout={() => this.props.onLogout()} />} />
                        <PrivateRoute path="/report" component={ReportContainer} />
                        <PrivateRoute path="/configuration" component={ConfigurationContainer} />
                        <PrivateRoute path="/employee-registration" component={BulkRegistrationContainer} />
                        <PrivateRoute path="/event-detail/:eventId" component={EventDetailContainer} />
                        <PrivateRoute path="/event-upload" component={BulkEventContainer} />
                        <PrivateRoute path="/create-single-event" component={SingleEventContainer} />
                        <PrivateRoute path="/registration/:eventId" component={RegistrationContainer} />
                        <PrivateRoute path="/fovorite-events" component={FovoriteEventsContainer} />
                        <PrivateRoute path="/upcoming-events" component={UpcomingEventsContainer} />
                        <PrivateRoute path="/my-events" component={() => <UpcomingEventsContainer isMyEvents={true} />} />
                        <PrivateRoute path="/bulk-associate-register/:eventId" component={BulkRegistrationContainer} />
                        <PrivateRoute path="/post-event-update" component={PostEventUpdateContainer} />
                        <PrivateRoute path="/post-event-update-detail/:eventId" component={PostEventUpdateDetailsContainer} />
                        <Route path="/access-denied" component={AccessDeniedComponent} />
                    </React.Fragment>
                </HashRouter>
                <Footer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any) => {
    const userToken = SessionManagement.currentUser();
    if (userToken.token) {
        return {
            isAuthenticated: true,
            role: userToken.role
        };
    }
    return {
        isAuthenticated: state.login.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            onLogout
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);
