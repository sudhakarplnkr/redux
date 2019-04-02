import * as React from 'react';
import { Link } from 'react-router-dom';
import { IFavoriteEventComponentProps } from '../../models/FavoriteEvent';
import { IEvent } from '../../models/Event';

const FovoriteEventsComponent = (props: IFavoriteEventComponentProps) => {
    return (
        <div className="container">
            <h2>
                <small>Favorite Events</small>
            </h2>
            <hr />
            <div className="favorite-event-section">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Event Title</th>
                                <th className="text-center">Beneficiary Name</th>
                                <th className="text-center">Project</th>
                                <th className="text-center">Event Category</th>
                                <th className="text-center">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.eventModel.events &&
                                props.eventModel.events.map((event: IEvent) => (
                                    <tr key={event._id}>
                                        <td>
                                            <Link to={`/create-single-event`} onClick={() => props.onSelectFavorite(event)}>{event.EventTitle}</Link>
                                        </td>
                                        <td>
                                            {event.BenificiaryName}
                                        </td>
                                        <td>
                                            {event.Project}
                                        </td>
                                        <td>
                                            {event.EventCategory}
                                        </td>
                                        <td>
                                            <i className="fa fa-remove action" onClick={() => props.onRemoveFavorite(event._id)} />
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

                <Link onClick={() => props.onSelectFavorite({})} to="/create-single-event">
                    <button className="btn btn-success pull-right">Create New Event</button>
                </Link>
            </div>

            {/* The Modal  */}
            <div className="modal fade" id="removeFavoriteModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                &times;
                            </button>
                            <h4 className="modal-title">Confirm</h4>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure to remove it from favorite events?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">
                                Cancel
                            </button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FovoriteEventsComponent;
