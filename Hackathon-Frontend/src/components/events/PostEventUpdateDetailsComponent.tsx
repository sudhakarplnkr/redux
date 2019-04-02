import * as React from 'react';
import { IPostEventComponentProps } from '../../models/Event';
import { Link } from 'react-router-dom';

const PostEventUpdateDetailsComponent = (props: IPostEventComponentProps) => {

    return (
        <div className="container">

            <form className="form-horizontal" onSubmit={event => event.preventDefault()}>
                <h2>
                    <small>Post Event Details</small>
                </h2>
                <hr />
                <div className="form-group">
                    <label htmlFor="volunteerHours" className="col-md-4 control-label">
                        Volunteer Hours
                    </label>
                    <div className="col-md-5">
                        <input type="text" onChange={event => props.updatePostEventModel({ VolunteerHours: event.target.value })} className="form-control" id="volunteerHours" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="travelHours" className="col-md-4 control-label">
                        Travel Hours
                    </label>
                    <div className="col-md-5">
                        <input type="text" onChange={event => props.updatePostEventModel({ TravelHours: event.target.value })} className="form-control" id="travelHours" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="livesImpacted" className="col-md-4 control-label">
                        Lives Impacted
                    </label>
                    <div className="col-md-5">
                        <input type="number" onChange={event => props.updatePostEventModel({ LivesImpacted: Number(event.target.value) })} className="form-control" id="livesImpacted" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="cancel" className="col-md-5 control-label" />
                    <div className="col-md-1">
                        <Link to={`/post-event-update`} className="btn btn-default">Cancel</Link>
                    </div>
                    <div className="col-md-6">
                        <button id="submit" onClick={() => props.save()} value="Save" className="btn btn-primary">
                            Save{' '}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default PostEventUpdateDetailsComponent;
