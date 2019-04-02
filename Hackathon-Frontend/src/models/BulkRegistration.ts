import { FileParameter } from '../utils/FileManagementClient';

export interface IBulkRegistrationModel {
  fileParameter?: FileParameter;
}

export interface IBulkRegistrationProps extends IBulkRegistrationModel {
  onUploadChange: (fileParameter: FileParameter) => void;
  onUpload: (fileParameter?: FileParameter) => void;
  bulkRegistrationChange?: (
    bulkRegistrationModel: IBulkRegistrationModel
  ) => void;
}

export interface IBulkRegistrationContainerProps
  extends IBulkRegistrationModel {
  onBulkRegistrationChange: (
    bulkRegistrationModel: IBulkRegistrationModel
  ) => void;
  registration: (eventId: string, fileParameter: FileParameter) => void;
  eventId: string;
}
