import * as React from 'react';
import SingleEventComponent from '../../components/events/SingleEventComponent';
import { ISingleEventContainerProps, ISingleEventModel, ISingleEventState } from '../../models/SingleEvent';
import { submitEvent, updateEventDetails, getDefaultVelues, updateEventSavedStatus } from '../../actions/SingleEventAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SessionManagement from '../../utils/SessionManagement';
import { Redirect } from 'react-router';
import { IEventModel } from '../../models/Event';

class SingleEventContainer extends React.Component<ISingleEventContainerProps, {}> {

    public constructor(props: ISingleEventContainerProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.getDefaultVelues();
        if (this.props.event) {
            const { _id, ...favouriteEvent } = this.props.event;
            this.updateEventDetails({ ...favouriteEvent });
        }
    }

    private updateEventDetails(singleEventModel: ISingleEventModel) {
        const model = { ...this.props.singleEventModel, ...singleEventModel };
        this.props.updateEventDetails(model);
    }

    private submitEvent() {
        let token = SessionManagement.GetToken();
        if (token) {
            this.props.updateEventDetails({ CreatedBy: token.associateId });
        }
        this.props.submitEvent(this.props.singleEventModel);
    }

    public render() {
        if (this.props.isEventSaved === true) {
            this.props.updateEventSavedStatus(false);
            return <Redirect to="/upcoming-events" />;
        }
        return (
            <SingleEventComponent favoriteEvent={this.props.event && this.props.event} submitEvent={() => this.submitEvent()} eventDefaultValues={this.props.eventDefaultValues} updateEventDetails={(model: ISingleEventModel) => this.updateEventDetails(model)} />
        );
    }
}

const mapStateToProps = ({ singleEvent, favoriteEvent }: { singleEvent: ISingleEventState, favoriteEvent: IEventModel }) => {
    return {
        singleEventModel: singleEvent.singleEventModel,
        eventDefaultValues: singleEvent.eventDefaultValues,
        isEventSaved: singleEvent.isEventSaved,
        event: favoriteEvent.event
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            updateEventDetails,
            updateEventSavedStatus,
            submitEvent,
            getDefaultVelues,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleEventContainer);
