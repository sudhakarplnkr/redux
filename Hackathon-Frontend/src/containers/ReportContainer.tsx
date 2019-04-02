import * as React from 'react';
import { connect } from 'react-redux';
import ReportComponent from '../components/ReportComponent';

class ReportContainer extends React.Component<{}, {}> {
    public render() {
        return (
            <ReportComponent />
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        configuration: state.data.configuration
    };
};

export default connect(
    mapStateToProps    
)(ReportContainer);
