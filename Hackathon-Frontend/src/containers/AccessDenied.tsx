import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onLogout } from '../actions/AppActions';
import { IAppProps } from '../models/App';

class AccessDeniedComponent extends React.Component<IAppProps, {}> {
    public componentWillMount() {
        this.props.onLogout();
    }

    public render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center text-danger">
                            <h1>Oops!</h1>
                            <h2>Access Denied</h2>
                            <span>Secure content is being accessed</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            onLogout
        },
        dispatch
    );

export default connect(
    null,
    mapDispatchToProps
)(AccessDeniedComponent);
