import * as React from 'react';
import { IAssociateLoginProps } from '../../models/Login';
import { Link } from 'react-router-dom';

const AssociateLoginComponent = (login: IAssociateLoginProps) => {
    return (
        <div className="col-md-2 col-md-offset-3">
            <h2>Associate Login</h2>
            <form name="form" onSubmit={(event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); login.onAssociateLogin(); }}>
                <div>
                    <label htmlFor="associateId">Associate Id</label>
                    <input
                        type="number"
                        className="form-control"
                        name="associateId"
                        id="associateId"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => login.onChange(event)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <button id="associateLogin" type="submit" disabled={!login.associateId} className="btn btn-primary">Login</button>
                   <Link to="/login" id="admin-login" className="pull-right">Admin Login</Link>
                </div>
            </form>
        </div>);
};

export default AssociateLoginComponent;