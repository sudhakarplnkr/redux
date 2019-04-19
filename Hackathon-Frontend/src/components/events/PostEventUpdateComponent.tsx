import * as React from 'react';
import { IEvent } from '../../models/Event';
import { Link } from 'react-router-dom';
import { numberToTime } from '../../utils/DateService';
import SessionManagement from '../../utils/SessionManagement';
import { RoleTypes } from '../../models/Login';

const PostEventUpdateComponent = ({ events }: { events: IEvent[] }) => {
    const { role } = SessionManagement.currentUser();
    return (
        <div className="container">
            <h2>
                <small>Post Event Update</small>
            </h2>
            <hr />
            <div className="table-responsive">
                <table className="table table-hover text-center">
                    <thead>
                        <tr>
                            <th className="text-center">Title</th>
                            <th className="text-center">Date</th>
                            <th className="text-center">Start Time</th>
                            <th className="text-center">End Time</th>
                            <th className="text-center">Location</th>
                            {role === RoleTypes.Admin && <th className="text-center" />}
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
                                        <Link to={`post-event-update-detail/${event._id}`}>{event.EventTitle}</Link>
                                    </td>
                                    <td>{event.EventDate && new Date(event.EventDate).toDateString()}</td>
                                    <td>{numberToTime(event.StartTime)}</td>
                                    <td>{numberToTime(event.EndTime)}</td>
                                    <td>{event.Location}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostEventUpdateComponent;
