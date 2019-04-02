import * as React from 'react';
import { connect } from 'react-redux';
import EventDetailsComponent from '../../components/events/EventDetailsComponent';
import { IEventsDetailContainerProps, IEventModel } from '../../models/Event';
import { bindActionCreators } from 'redux';
import { getEvent } from '../../actions/eventAction';

class EventDetailsContainer extends React.Component<
  IEventsDetailContainerProps,
  {}
> {
  public constructor(props: IEventsDetailContainerProps) {
    super(props);
  }
  public componentDidMount() {
    this.props.loadEvent(this.props.eventId);
  }
  public render() {
    return <EventDetailsComponent event={this.props.event} />;
  }
}
const mapStateToProps = ({ event }: { event: IEventModel }, ownProps: any) => {
  return {
    eventId: ownProps.match.params.eventId,
    event: event.event
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      loadEvent: (eventId: string) => getEvent(eventId)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailsContainer);
