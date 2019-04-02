import * as React from 'react';
import { FileParameter } from '../../utils/FileManagementClient';
import { IBulkEventComponentProps } from '../../models/Event';

const EventUploadComponent = (props: IBulkEventComponentProps) => {
    const file = { fileInput: {} as HTMLInputElement };
    const onUpload = () => {
        file.fileInput.value = '';
        props.onUpload(props.fileParameter);
    };
    const onUploadChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files, name } = event.target;
        if (!files) {
            return;
        }
        const fileParameter: FileParameter = {
            data: files[0],
            fileName: name
        };
        props.onUploadChange(fileParameter);
    };

    return (
        <div className="container">
            <form className="form-horizontal">
                <h2>
                    <small>Bulk Event Upload</small>
                </h2>
                <hr />
                <div className="form-group">
                    <label htmlFor="beneficiaryName" className="col-md-4 control-label">
                        Select file to register
                    </label>
                    <div className="col-md-5">
                        <input type="file" className="btn" name="registration" accept=".xlsx,.xls" ref={(ref: HTMLInputElement) => (file.fileInput = ref)} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onUploadChange(event)} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="transportDropPoint" className="col-md-5 control-label" />
                    <button disabled={!props.fileParameter || !props.fileParameter.data} type="button" className="btn" onClick={() => onUpload()}>
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventUploadComponent;
