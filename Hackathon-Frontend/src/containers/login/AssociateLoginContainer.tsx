import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import {
  onAssociateIdChange,
  onAssociateLogin
} from '../../actions/LoginActions';
import AssociateLoginComponent from '../../components/login/AssociateLoginComponent';
import {
  ILoginState,
  RoleTypes,
  IAssociateLoginContainerProps
} from '../../models/Login';

class AssociateLoginContainer extends React.Component<
IAssociateLoginContainerProps,
  ILoginState
> {
  public constructor(props: IAssociateLoginContainerProps) {
    super(props);
  }

  private handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (Number(event.target.value)) {
      this.props.onAssociateIdChange(parseInt(event.target.value, 0));
    }
  };

  private handleOnLogin = (): void => {
    if (this.props.associateId) {
      this.props.onAssociateLogin(this.props.associateId);
    }
  };

  public render() {
    if (this.props.isAuthenticated && this.props.role === RoleTypes.Admin) {
      return <Redirect to="/" />;
    }

    if (this.props.isAuthenticated) {
      return <Redirect to="/upcoming-events" />;
    }
    return (
      <AssociateLoginComponent
        associateId={this.props.associateId}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          this.handleOnChange(event)
        }
        onAssociateLogin={() => this.handleOnLogin()}
      />
    );
  }
}

const mapStateToProps = ({ login: login }: any) => {
  return {
    associateId: login.associateId,
    isAuthenticated: login.isAuthenticated,
    role: login.role
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onAssociateLogin,
      onAssociateIdChange
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssociateLoginContainer);
