import * as React from 'react';
import UpcomingEventsComponent from '../../components/events/UpcomingEventsComponent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getEvents } from '../../actions/eventAction';
import { IUpcomingEventsContainerProps, IEventModel } from '../../models/Event';
import { addFavoriteEvent, removeFavoriteEvent } from '../../actions/favoriteEventAction';

class UpcomingEventsContainer extends React.Component<IUpcomingEventsContainerProps, {}> {
    public constructor(props: IUpcomingEventsContainerProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.loadEvents(this.props.isMyEvents);
    }

    public render() {
        return <UpcomingEventsComponent showFavorite={!this.props.isMyEvents} onAddFavorite={(eventId: string) => this.props.addFavoriteEvent(eventId)} onRemoveFavorite={(eventId: string) => this.props.removeFavoriteEvent(eventId)} events={this.props.eventModel.events} />;
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
            loadEvents: (isMyEvents?: boolean) => getEvents(isMyEvents),
            addFavoriteEvent: (eventId: string) => addFavoriteEvent(getEvents, eventId),
            removeFavoriteEvent: (eventId: string) => removeFavoriteEvent(getEvents, eventId)
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpcomingEventsContainer);
