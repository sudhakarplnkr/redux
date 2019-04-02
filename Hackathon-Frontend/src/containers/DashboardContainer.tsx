import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadDashboard } from '../actions/DashboardActions';
import DashboardComponent from '../components/DashboardComponent';

class DashboardContainer extends React.Component<{}, {}> {
    public render() {
        return (
            <DashboardComponent />
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        dashboard: state.data.dashboard
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            loadDashboard
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
