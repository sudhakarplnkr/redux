import * as React from 'react';
import { connect } from 'react-redux';
import {
  bulkRegistrationChange,
  registration
} from '../../actions/BulkRegistrationActions';
import BulkRegistrationComponent from '../../components/registrations/BulkRegistrationComponent';
import {
  IBulkRegistrationContainerProps,
  IBulkRegistrationModel
} from '../../models/BulkRegistration';
import { bindActionCreators } from 'redux';
import { FileParameter } from '../../utils/FileManagementClient';

class BulkRegistrationContainer extends React.Component<
  IBulkRegistrationContainerProps,
  {}
> {
  public constructor(props: IBulkRegistrationContainerProps) {
    super(props);
  }

  public render() {
    return (
      <BulkRegistrationComponent
        fileParameter={this.props.fileParameter}
        onUpload={(fileParameter: FileParameter) =>
          this.props.registration(this.props.eventId, fileParameter)
        }
        onUploadChange={(fileParameter: FileParameter) =>
          this.props.onBulkRegistrationChange({ fileParameter: fileParameter })
        }
      />
    );
  }
}
const mapStateToProps = (
  { bulkRegistration }: { bulkRegistration: any },
  ownProps: any
) => {
  return {
    fileParameter: bulkRegistration.fileParameter,
    eventId: ownProps.match.params.eventId
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      onBulkRegistrationChange: (
        bulkRegistrationModel: IBulkRegistrationModel
      ) => bulkRegistrationChange(bulkRegistrationModel),
      registration: (eventId: string, fileParameter: FileParameter) =>
        registration(eventId, fileParameter)
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BulkRegistrationContainer);
