import * as React from 'react';
import FovoriteEventsComponent from '../../components/events/FavoriteEventsComponent';
import { bindActionCreators } from 'redux';
import { IEventModel, IEvent } from '../../models/Event';
import { getFavoriteEvent, removeFavoriteEvent, updateFavoriteEvent } from '../../actions/favoriteEventAction';
import { connect } from 'react-redux';
import { IFavoriteEventContainerProps } from '../../models/FavoriteEvent';

class FovoriteEventsContainer extends React.Component<IFavoriteEventContainerProps, {}> {
    public componentWillMount() {
        this.props.loadFavoriteEvent();
    }

    public render() {
        return <FovoriteEventsComponent onSelectFavorite={(event: IEvent) => this.props.onSelectFavorite(event)} eventModel={this.props.eventModel} onRemoveFavorite={(eventId: string) => this.props.onRemoveFavorite(eventId)} />;
    }
}

const mapStateToProps = ({ favoriteEvent }: { favoriteEvent: IEventModel }) => {
    return {
        eventModel: favoriteEvent
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            loadFavoriteEvent: () => getFavoriteEvent(),
            onRemoveFavorite: (eventId: string) => removeFavoriteEvent(getFavoriteEvent, eventId),
            onSelectFavorite: (event: IEvent) => updateFavoriteEvent(event)
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FovoriteEventsContainer);
