import * as React from 'react';
import { IAssociateProps } from '../../models/Registration';
import { Link } from 'react-router-dom';

const RegistrationComponent = (props: IAssociateProps) => {
    const { associateModel } = props;
    return (
        <div className="container">
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col-md-10 text-center">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" onChange={event => props.updateAssociateDetails({ OwnTransport: event.target.checked })} /> Own Transport{' '}
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="ownTransport" className="col-md-4 control-label">
                        Boarding Point
                    </label>
                    <div className="col-md-5">
                        <textarea className="form-control" disabled={associateModel && associateModel.OwnTransport} onChange={event => props.updateAssociateDetails({ BoardingPoint: event.target.value })} id="boardingPoint" rows={4} />
                    </div>
                </div>
                <div className="row text-center">
                    <Link type="button" to={'/upcoming-events'} className="btn btn-default button-spacing">
                        Cancel
                    </Link>
                    <button type="button" disabled={associateModel && !associateModel.OwnTransport && !associateModel.BoardingPoint} className="btn btn-success" onClick={() => props.saveRegistration()}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationComponent;