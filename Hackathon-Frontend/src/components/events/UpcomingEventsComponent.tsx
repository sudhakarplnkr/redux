import * as React from 'react';
import { IEvent } from '../../models/Event';
import { Link } from 'react-router-dom';
import { numberToTime } from '../../utils/DateService';
import SessionManagement from '../../utils/SessionManagement';
import { RoleTypes } from '../../models/Login';

const UpcomingEventsComponent = ({ events, onRemoveFavorite, onAddFavorite, showFavorite }: { events: IEvent[]; onAddFavorite: (eventId?: string) => void; onRemoveFavorite: (eventId?: string) => void, showFavorite: boolean }) => {
    const { role } = SessionManagement.currentUser();
    return (
        <div className="container">
            <h2>
                <small>Upcoming Events</small>
            </h2>
            <hr />
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th className="text-center">Tittle</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Start Time</th>
                            <th className="text-center">End Time</th>
                            <th className="text-center">Location</th>
                            <th className="text-center">No Of Valunteers</th>
                            <th className="text-center">Event Description</th>                            
                            {showFavorite && role === RoleTypes.Admin && <th className="text-center" />}
                        </tr>
                    </thead>
                    <tbody>
                        {!events && (
                            <tr>
                                <td colSpan={6}>No events found to show.</td>
                            </tr>
                        )}
                        {!!events &&
                            events.map((event: IEvent) => (
                                <tr key={event._id}>
                                    <td>
                                        <Link to={`event-detail/${event._id}`}>{event.EventTitle}</Link>
                                    </td>
                                    <td>{event.EventDate && new Date(event.EventDate).toDateString()}</td>
                                    <td>{numberToTime(event.StartTime)}</td>
                                    <td>{numberToTime(event.EndTime)}</td>
                                    <td>{event.Location}</td>
                                    <td>{event.NoOfValunteersRequired}</td>
                                    <td>{event.EventDescription}</td>
                                    {showFavorite && role === RoleTypes.Admin && (
                                        <td>
                                            {event.IsUserFavorite && <i title="click to remove from the favorite" className="fa fa-star action" onClick={() => onRemoveFavorite(event._id)} />}
                                            {!event.IsUserFavorite && <i title="click to add to the favorite" className="fa fa-star-o action" onClick={() => onAddFavorite(event._id)} />}
                                        </td>
                                    )}
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpcomingEventsComponent;
