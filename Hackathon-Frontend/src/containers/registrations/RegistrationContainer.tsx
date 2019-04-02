import * as React from 'react';
import { IAssociateContainerProps, IAssociateState, IAssociateModel } from '../../models/Registration';
import RegistrationComponent from '../../components/registrations/RegistrationComponent';
import { updateAssociateDetails, saveRegistration, updateAssociateSavedStatus } from '../../actions/RegistrationAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SessionManagement from '../../utils/SessionManagement';

class RegistrationContainer extends React.Component<IAssociateContainerProps, {}> {
    public constructor(props: IAssociateContainerProps) {
        super(props);
    }

    private updateAssociateDetails = (associateModel: IAssociateModel) => {
        const model = { ...this.props.associateModel, ...associateModel };
        this.props.updateAssociateDetails(model);
    };

    private SaveRegistration = (): void => {
        const model = { ...this.props.associateModel, EventId: this.props.eventId, AssociateId: Number(SessionManagement.GetAssociateId()) };
        this.props.saveRegistration(model);
    };
    public render() {
        return <RegistrationComponent associateModel={this.props.associateModel} updateAssociateDetails={(model: IAssociateModel) => this.updateAssociateDetails(model)} saveRegistration={() => this.SaveRegistration()} />;
    }
}

const mapStateToProps = ({ registration }: { registration: IAssociateState }, ownProps: any) => {
    return {
        associateModel: registration.associateModel,
        eventId: ownProps.match.params.eventId,
        isAssociateSaved: registration.isAssociateSaved
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            updateAssociateDetails,
            saveRegistration,
            updateAssociateSavedStatus
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationContainer);