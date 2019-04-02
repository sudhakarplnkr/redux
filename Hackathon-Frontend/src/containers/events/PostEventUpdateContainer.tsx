import * as React from 'react';
import PostEventUpdateComponent from '../../components/events/PostEventUpdateComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/eventAction';
import { IUpcomingEventsContainerProps, IEventModel } from '../../models/Event';

class PostEventUpdateContainer extends React.Component<IUpcomingEventsContainerProps, {}> {
    public constructor(props: IUpcomingEventsContainerProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.loadEvents();
    }

    public render() {
        return <PostEventUpdateComponent events={this.props.eventModel.events} />;
    }
}

const mapStateToProps = ({ event }: { event: IEventModel }) => {
    return {
        eventModel: event
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
)(PostEventUpdateContainer);