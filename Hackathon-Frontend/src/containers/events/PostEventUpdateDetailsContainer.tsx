import * as React from 'react';
import PostEventUpdateDetailsComponent from '../../components/events/PostEventUpdateDetailsComponent';
import { IPostEventContainerProps, IPostEvent, IPostEventState } from '../../models/Event';
import { updatePostEventModel, savePostEvent } from '../../actions/SingleEventAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PostEventUpdateDetailsContainer extends React.Component<IPostEventContainerProps, {}> {

    public constructor(props: IPostEventContainerProps) {
        super(props);
    }

    private updateEventDetails(postEvent: IPostEvent) {
        const model = { ...this.props.postEvent, ...postEvent };
        this.props.updatePostEventModel(model);
    }

    private submitEvent() {
        let event = { ...this.props.postEvent, EventId: this.props.eventId };
        this.props.savePostEvent(event);
    }

    public render() {
        return (
            <PostEventUpdateDetailsComponent updatePostEventModel={(model: IPostEvent) => this.updateEventDetails(model)} save={() => this.submitEvent()} />
        );
    }
}

const mapStateToProps = ({ postEvent }: { postEvent: IPostEventState }, ownProps: any) => {
    return {
        postEvent: postEvent.postEvent,
        eventId: ownProps.match.params.eventId
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            updatePostEventModel,
            savePostEvent
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostEventUpdateDetailsContainer);
