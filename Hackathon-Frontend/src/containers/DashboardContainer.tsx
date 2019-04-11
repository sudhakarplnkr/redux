import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadRegisteredAssociate } from '../actions/DashboardActions';
import DashboardComponent from '../components/DashboardComponent';
import { IDashboardProps, IDashboardActionProps } from '../models/Dashboard';

class DashboardContainer extends React.Component<IDashboardProps & IDashboardActionProps> {
    public componentDidMount() {
        this.props.loadRegisteredAssociate();
    }

    public render() {
        return <DashboardComponent registeredAssociate={this.props.registeredAssociate} />;
    }
}
const mapStateToProps = ({ dashboard }: { dashboard: IDashboardProps }) => {    
    return {
        registeredAssociate: dashboard.registeredAssociate
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            loadRegisteredAssociate: () => loadRegisteredAssociate()
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardContainer);
