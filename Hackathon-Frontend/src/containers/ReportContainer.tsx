import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../actions/eventAction';
import ReportComponent from '../components/ReportComponent';
import { IReportContainerProps, IEventModel } from '../models/Event';

class ReportContainer extends React.Component<IReportContainerProps> {
    public componentDidMount() {
        this.props.loadEvents();
    }

    public render() {
        return <ReportComponent events={this.props.events} />;
    }
}

const mapStateToProps = ({ event }: { event: IEventModel }) => {
    return {
        events: event.events
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            loadEvents: () => getEvents()
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReportContainer);
