import * as React from 'react';
import { connect } from 'react-redux';
import ConfigurationComponent from '../components/ConfigurationComponent';
import { IConfigurationContainerProps, IConfigurationModel, IUser } from '../models/User';
import { getUsers, saveUser, deleteUser, clearUser, updateConfigurationModel } from '../actions/ConfigurationAction';
import { bindActionCreators } from 'redux';

class ConfigurationContainer extends React.Component<IConfigurationContainerProps, {}> {
    public constructor(props: IConfigurationContainerProps) {
        super(props);
    }

    private updateConfigurationModel(updatedUser: IUser) {
        const { user } = this.props.configurationModel;
        this.props.updateConfigurationModel({ user: { ...user, ...updatedUser } });
    }

    public componentDidMount() {
        this.props.loadUsers();
    }

    public render() {
        return <ConfigurationComponent updateConfigurationModel={(configurationModel: IConfigurationModel) => this.props.updateConfigurationModel(configurationModel)} clearUser={() => this.props.clearUser()} saveUser={() => this.props.saveUser(this.props.configurationModel.user)} setUser={(user: IUser) => this.updateConfigurationModel(user)} deleteUser={(user: IUser) => this.props.deleteUser(user)} configurationModel={this.props.configurationModel} />;
    }
}
const mapStateToProps = ({ configuration }: { configuration: IConfigurationModel }) => {
    return {
        configurationModel: configuration
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            saveUser: (user: IUser) => saveUser(user),
            loadUsers: () => getUsers(),
            deleteUser: (user: IUser) => deleteUser(user),
            clearUser: () => clearUser(),
            updateConfigurationModel: (configurationModel: IConfigurationModel) => updateConfigurationModel(configurationModel)
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfigurationContainer);
