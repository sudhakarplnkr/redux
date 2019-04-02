import * as React from 'react';
import 'react-fa';
import { IModalDialogProps } from '../../models/modalDialog';

const ModalDialogComponent = (props: IModalDialogProps) => {
  if (!props.showDialog) {
    return null;
  }
  return (
    <div>
      <div className="overlay" />
      <div className="modal-dialog modal-dialog-bring-front">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              onClick={props.Cancel}
              className="close"
              data-dismiss="modal"
            >
              &times;
            </button>
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">{props.element}</div>
          <div className="modal-footer">
            {!props.hideOk && (
              <button
                type="button"
                onClick={props.Ok}
                className="btn btn-primary"
              >
                {props.okayLabel ? props.okayLabel : 'OK'}
              </button>
            )}
            <button
              type="button"
              onClick={props.Cancel}
              className="btn btn-default"
              data-dismiss="modal"
            >
              {props.cancelLabel ? props.cancelLabel : 'Cancel'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalDialogComponent;
