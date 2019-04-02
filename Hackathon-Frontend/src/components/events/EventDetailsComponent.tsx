import * as React from 'react';
import { IEvent } from '../../models/Event';
import { Link } from 'react-router-dom';

const EventDetailsComponent = ({ event }: { event: IEvent }) => {
    return (
        <div className="container">
            <h2>
                <small>Event Details</small>
            </h2>
            <hr />
            <div className="favorite-event-section">
                <div className="table-responsive">
                    <table className="table table-hover text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Event</th>
                                <th className="text-center">Date</th>
                                <th className="text-center">Start Time</th>
                                <th className="text-center">End Time</th>
                                <th className="text-center">Event Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={event._id}>
                                <td>{event.EventTitle}</td>
                                <td>{event.EventDate && new Date(event.EventDate).toDateString()}</td>
                                <td>{event.StartTime}</td>
                                <td>{event.EndTime}</td>
                                <td>{event.NoOfValunteersRequired}</td>
                                <td>{event.EventDescription}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h4>Event Description</h4>
                <hr />
                <div className="text-justify">{event.EventDescription}</div>
                <div className="form-group">
                    <div className="col-md-12 text-right">
                        <Link id="register" className="btn btn-default button-spacing" to={`/registration/${event._id}`}>
                            Register
                        </Link>
                        <Link id="bulk-register" className="btn btn-primary" to={`/bulk-associate-register/${event._id}`}>
                            Bulk Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsComponent;
