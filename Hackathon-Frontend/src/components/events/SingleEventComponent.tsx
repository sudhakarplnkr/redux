import * as React from 'react';
import { ISingleEventProps } from '../../models/SingleEvent';
import { Link } from 'react-router-dom';
import * as dateFormat from 'dateformat';

const SingleEventComponent = (props: ISingleEventProps) => {
    const onNumberChange = (value: string) => {
        props.updateEventDetails({ NoOfValunteersRequired: Number(value) });
    };
    const onDateChange = (value: string) => {
        props.updateEventDetails({ EventDate: new Date(value) });
    };
    const onStartTimeChange = (value: string) => {
        let replaceWith = /\:/gi;
        value = value.replace(replaceWith, '.');
        let formattedTime = Number(value) / 24;
        props.updateEventDetails({ StartTime: formattedTime });
    };
    const onEndTimeChange = (value: string) => {
        let replaceWith = /\:/gi;
        value = value.replace(replaceWith, '.');
        var formattedTime = Number(value) / 24;
        props.updateEventDetails({ EndTime: formattedTime });
    };

    const defaultOption = <option>--Select Any--</option>;

    return (
        <div className="container">
            <form className="form-horizontal" onSubmit={() => props.submitEvent()}>
                <h2>
                    <small>Create Event</small>
                </h2>
                <hr />
                <div className="form-group">
                    <label htmlFor="beneficiaryName" className="col-md-4 control-label">
                        Beneficiary Name
                    </label>
                    <div className="col-md-5">
                        <input className="form-control" defaultValue={props.favoriteEvent && props.favoriteEvent.BenificiaryName} onChange={event => props.updateEventDetails({ BenificiaryName: event.target.value })} id="beneficiaryName" list="beneficiaryNameList" required={true} />
                        <datalist className="col-md-5" id="beneficiaryNameList">
                            {props.eventDefaultValues &&
                                props.eventDefaultValues.beneficiary &&
                                props.eventDefaultValues.beneficiary.map((single, key) => (
                                    <option key={key} value={single.BeneficiaryName}>
                                        {single.BeneficiaryName}
                                    </option>
                                ))}
                        </datalist>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="councilName" className="col-md-4 control-label">
                        Council Name
                    </label>
                    <div className="col-md-5">
                        <input className="form-control" defaultValue={props.favoriteEvent && props.favoriteEvent.CouncilName} onChange={event => props.updateEventDetails({ CouncilName: event.target.value })} id="councilName" list="CouncilNameNameList" required={true} />
                        <datalist className="col-md-5" id="CouncilNameNameList">
                            {props.eventDefaultValues &&
                                props.eventDefaultValues.council &&
                                props.eventDefaultValues.council.map((single, key) => (
                                    <option key={key} value={single.CouncilName}>
                                        {single.CouncilName}
                                    </option>
                                ))}
                        </datalist>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="project" className="col-md-4 control-label">
                        Project
                    </label>
                    <div className="col-md-5">
                        <input className="form-control" defaultValue={props.favoriteEvent && props.favoriteEvent.Project} onChange={event => props.updateEventDetails({ Project: event.target.value })} id="project" list="projectNameList" required={true} />
                        <datalist className="col-md-5" id="projectNameList">
                            {props.eventDefaultValues &&
                                props.eventDefaultValues.project &&
                                props.eventDefaultValues.project.map((single, key) => (
                                    <option key={key} value={single.ProjectName}>
                                        {single.ProjectName}
                                    </option>
                                ))}
                        </datalist>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eventCategory" className="col-md-4 control-label">
                        Event Category
                    </label>
                    <div className="col-md-5">
                        <input className="form-control" defaultValue={props.favoriteEvent && props.favoriteEvent.EventCategory} onChange={event => props.updateEventDetails({ EventCategory: event.target.value })} id="eventCategory" list="eventCategoryList" required={true} />
                        <datalist className="col-md-5" id="eventCategoryList">
                            {props.eventDefaultValues &&
                                props.eventDefaultValues.eventCategory &&
                                props.eventDefaultValues.eventCategory.map((single, key) => (
                                    <option key={key} value={single.EventCategoryName}>
                                        {single.EventCategoryName}
                                    </option>
                                ))}
                        </datalist>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eventTitle" className="col-md-4 control-label">
                        Event Title
                    </label>
                    <div className="col-md-5">
                        <input type="text" className="form-control" defaultValue={props.favoriteEvent && props.favoriteEvent.EventTitle} onChange={event => props.updateEventDetails({ EventTitle: event.target.value })} id="eventTitle" placeholder="Event Title" required={true} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="eventDescription" className="col-md-4 control-label">
                        Event Description
                    </label>
                    <div className="col-md-5">
                        <textarea className="form-control" defaultValue={props.favoriteEvent && props.favoriteEvent.EventDescription} onChange={event => props.updateEventDetails({ EventDescription: event.target.value })} id="eventDescription" placeholder="Event Description" rows={4} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="date" className="col-md-4 control-label">
                        Date
                    </label>
                    <div className="col-md-5">
                        <input type="date" className="form-control" onChange={event => onDateChange(event.target.value)} id="date" placeholder="Date" min={dateFormat(new Date(), 'isoDate')} required={true} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="startTime" className="col-md-4 control-label">
                        Start Time
                    </label>
                    <div className="col-md-5">
                        <input type="Time" className="form-control" onChange={event => onStartTimeChange(event.target.value)} id="startTime" placeholder="Start Time" required={true} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="endTime" className="col-md-4 control-label">
                        End Time
                    </label>
                    <div className="col-md-5">
                        <input type="Time" className="form-control" onChange={event => onEndTimeChange(event.target.value)} id="endTime" placeholder="End Time" required={true} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="volunteersRequired" className="col-md-4 control-label">
                        Volunteers Required
                    </label>
                    <div className="col-md-5">
                        <input type="number" className="form-control" onChange={event => onNumberChange(event.target.value)} id="volunteersRequired" placeholder="Volunteers Required" min="1" required={true} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="podId" className="col-md-4 control-label">
                        POC ID
                    </label>
                    <div className="col-md-5">
                        <input type="number" className="form-control" defaultValue={props.favoriteEvent && String(props.favoriteEvent.PocId)} onChange={event => props.updateEventDetails({ PocId: Number(event.target.value) })} id="podId" placeholder="POC ID" min="1" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="col-md-4 control-label">
                        Location
                    </label>
                    <div className="col-md-5">
                        <input type="text" className="form-control" onChange={event => props.updateEventDetails({ Location: event.target.value })} id="location" placeholder="Location" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="transportBoardingPointType" className="col-md-4 control-label">
                        Transport Boarding Point Type
                    </label>
                    <div className="col-md-5">
                        <select className="form-control" id="transportBoardingPointType" onChange={(event: React.ChangeEvent<HTMLSelectElement>) => props.updateEventDetails({ TransportBoardingType: event.target.value })}>
                            {defaultOption}
                            {props.eventDefaultValues && props.eventDefaultValues.transportBoardingType && props.eventDefaultValues.transportBoardingType.map((single, key) => <option key={key}>{single.TransportBoardingType}</option>)}
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="transportBoardingPoints" className="col-md-4 control-label">
                        Transport Boarding Points
                    </label>
                    <div className="col-md-5">
                        <textarea className="form-control" onChange={event => props.updateEventDetails({ TransportBoardingPoint: event.target.value })} id="transportBoardingPoints" placeholder="Transport Boarding Points" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="transportDropPoint" className="col-md-4 control-label">
                        Transport Drop Points
                    </label>
                    <div className="col-md-5">
                        <textarea className="form-control" onChange={event => props.updateEventDetails({ TransportDropPoint: event.target.value })} id="transportDropPoints" placeholder="Transport Drop Point" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="cancel" className="col-md-5 control-label" />
                    <div className="col-md-1">
                        <Link id="cancel" className="btn btn-default" to="upcoming-events">
                            Cancel
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" id="submit" value="Create" className="btn btn-primary">
                            Create{' '}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SingleEventComponent;
