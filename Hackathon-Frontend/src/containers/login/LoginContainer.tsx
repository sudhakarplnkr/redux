import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { onLoginModelChange, onLogin } from '../../actions/LoginActions';
import LoginComponent from '../../components/login/LoginComponent';
import { ILoginContainerProps, ILoginState, ILoginModel } from '../../models/Login';

class LoginContainer extends React.Component<ILoginContainerProps, ILoginState> {
    public constructor(props: ILoginContainerProps) {
        super(props);
    }

    private handleOnChange = (loginModel: ILoginModel): void => {
        this.props.onLoginModelChange(loginModel);
    };

    private handleOnLogin = (): void => {
        if (this.props.loginModel) {
            this.props.onLogin(this.props.loginModel);
        }
    };

    public render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/upcoming-events" />;
        }
        return <LoginComponent loginModel={this.props.loginModel} onChange={(loginModel: ILoginModel) => this.handleOnChange(loginModel)} onLogin={() => this.handleOnLogin()} />;
    }
}

const mapStateToProps = ({ login: login }: any) => {
    return {
        loginModel: login.loginModel,
        isAuthenticated: login.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            onLogin,
            onLoginModelChange
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
