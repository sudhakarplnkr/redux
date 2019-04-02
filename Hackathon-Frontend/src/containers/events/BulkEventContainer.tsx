import * as React from 'react';
import { connect } from 'react-redux';
import BulkEventComponent from '../../components/events/BulkEventComponent';
import { bindActionCreators } from 'redux';
import { IBulkEventContainerProps, IBulkEventModel } from '../../models/Event';
import { FileParameter } from '../../utils/FileManagementClient';
import { bulkEventChange, upload } from '../../actions/BulkEventActions';
import SessionManagement from '../../utils/SessionManagement';

class BulkEventContainer extends React.Component<IBulkEventContainerProps, {}> {
    private registration(fileParameter: FileParameter) {
        this.props.upload(`${SessionManagement.GetAssociateId()}`, fileParameter);
    }
    public render() {
        return <BulkEventComponent fileParameter={this.props.fileParameter} onUpload={(fileParameter: FileParameter) => this.registration(fileParameter)} onUploadChange={(fileParameter: FileParameter) => this.props.bulkEventChange({ fileParameter: fileParameter })} />;
    }
}

const mapStateToProps = ({ bulkEvent }: { bulkEvent: IBulkEventModel }) => {
    return {
        fileParameter: bulkEvent.fileParameter
    };
};

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            bulkEventChange: (bulkEventModel: IBulkEventModel) => bulkEventChange(bulkEventModel),
            upload: (associateId: string, fileParameter: FileParameter) => upload(associateId, fileParameter)
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BulkEventContainer);
