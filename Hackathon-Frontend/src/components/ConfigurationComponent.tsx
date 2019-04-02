import * as React from 'react';
import { IConfigurationComponentProps, IUser } from '../models/User';
import { RoleTypes } from '../models/Login';
import ModalDialogComponent from './shared/ModalDialog';

const ConfigurationComponent = (props: IConfigurationComponentProps) => {
    const user = props.configurationModel.user || {};
    const { isAdd, isEdit, isDelete } = props.configurationModel;
    const phoneNumber = (event: React.ChangeEvent<HTMLInputElement>): number | undefined => {
        const value = parseInt(event.target.value, undefined);
        if (isNaN(value)) {
            return undefined;
        }
        return value;
    };
    return (
        <div className="container">
            <h2>
                <small>Users</small>
            </h2>
            <hr />
            <button className="btn pull-right" onClick={() => props.updateConfigurationModel({ isAdd: true })}>
                Add
            </button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {!!props.configurationModel.users &&
                        props.configurationModel.users.map((singleUser: IUser) => (
                            <tr key={singleUser._id}>
                                <td>{`${singleUser.FirstName} ${singleUser.LastName}`}</td>
                                <td>{singleUser.Username}</td>
                                <td>{singleUser.Role}</td>
                                <td>{singleUser.Email}</td>
                                <td>{singleUser.Phone}</td>
                                <td>
                                    <i
                                        className="fa fa-edit action"
                                        onClick={() =>
                                            props.updateConfigurationModel({
                                                user: singleUser,
                                                isEdit: true
                                            })
                                        }
                                    />
                                    <i
                                        className="fa fa-remove action"
                                        onClick={() =>
                                            props.updateConfigurationModel({
                                                user: singleUser,
                                                isDelete: true
                                            })
                                        }
                                    />
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <ModalDialogComponent showDialog={isDelete} title={'Delete User'} Cancel={() => props.clearUser()} Ok={() => props.deleteUser(user)} element={<div>Are you sure to delete the user?</div>} />
            <ModalDialogComponent
                showDialog={isAdd || isEdit}
                title={`${isAdd ? 'Add' : 'Edit'} User`}
                Cancel={() => props.clearUser()}
                Ok={() => props.saveUser()}
                element={
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="firstName" className="col-md-4 control-label">
                                First Name
                            </label>
                            <div className="col-md-5">
                                <input type="text" defaultValue={user.FirstName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setUser({ FirstName: event.target.value })} className="form-control" id="firstName" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="col-md-4 control-label">
                                Last Name
                            </label>
                            <div className="col-md-5">
                                <input type="text" defaultValue={user.LastName} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setUser({ LastName: event.target.value })} className="form-control" id="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username" className="col-md-4 control-label">
                                Username
                            </label>
                            <div className="col-md-5">
                                <input type="text" disabled={isEdit} defaultValue={user.Username} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setUser({ Username: event.target.value })} className="form-control" id="username" placeholder="Username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="associateId" className="col-md-4 control-label">
                                AssociateId
                            </label>
                            <div className="col-md-5">
                                <input type="number" value={`${user.AssociateId}`} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setUser({ AssociateId: phoneNumber(event) })} className="form-control" id="associateId" placeholder="associateId" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="role" className="col-md-4 control-label">
                                Role
                            </label>
                            <div className="col-md-5">
                                <select name="role" id="role" className="form-control" value={user.Role} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => props.setUser({ Role: event.target.value })}>
                                    <option>Select Any</option>
                                    {[RoleTypes.EventPoc, RoleTypes.Pmo, RoleTypes.Admin].map((role: RoleTypes) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="col-md-4 control-label">
                                Email
                            </label>
                            <div className="col-md-5">
                                <input type="text" defaultValue={user.Email} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setUser({ Email: event.target.value })} className="form-control" id="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="col-md-4 control-label">
                                Phone
                            </label>
                            <div className="col-md-5">
                                <input type="number" value={`${user.Phone}`} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setUser({ Phone: phoneNumber(event) })} className="form-control" id="phone" placeholder="Phone" />
                            </div>
                        </div>
                    </form>
                }
            />
        </div>
    );
};

export default ConfigurationComponent;
