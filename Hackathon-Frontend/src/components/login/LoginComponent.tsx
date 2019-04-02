import * as React from 'react';
import { ILoginProps } from '../../models/Login';
import { Link } from 'react-router-dom';

const LoginComponent = (login: ILoginProps) => {
    return (
        <div className="col-md-2 col-md-offset-3">
            <h2>Admin Login</h2>
            <form name="form">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" onChange={(event: React.ChangeEvent<HTMLInputElement>) => login.onChange({ username: event.target.value })} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" onChange={(event: React.ChangeEvent<HTMLInputElement>) => login.onChange({ password: event.target.value })} />
                </div>
                <br />
                <div className="form-group">
                    <button type="button" id="login" onClick={() => login.onLogin()} disabled={!login.loginModel || !login.loginModel.username || !login.loginModel.password} className="btn btn-primary">
                        Login
                    </button>
                    <Link to="/associate-login" className="pull-right">
                        Associate Login
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;
