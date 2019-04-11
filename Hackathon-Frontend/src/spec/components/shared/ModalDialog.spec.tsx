import * as React from 'react';
import { shallow } from 'enzyme';
import ModalDialog from '../../../components/shared/ModalDialog';
import { IModalDialogProps } from '../../../models/modalDialog';

describe('ModalDialog', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            Cancel: jasmine.createSpy(),
            Ok: jasmine.createSpy(),
            element: <div id="deleteText">Are you sure to delete the user?</div>,
            title: 'Delete User',
            okayLabel: 'OK',
            cancelLabel: 'Cancel',
            hideOk: false,
            showDialog: true
        } as IModalDialogProps;

        // Act
        const configuration = shallow(<ModalDialog {...props} />);

        // Assert
        expect(configuration.length).toBe(1);
        expect(configuration.find('div>div>div>div>h4').text()).toBe('Delete User');
        expect(configuration.find('.btn-primary').text()).toBe('OK');
        expect(configuration.find('.btn-default').text()).toBe('Cancel');
        expect(configuration.find('#deleteText').length).toBe(1);
        expect(configuration.find('#deleteText').text()).toBe('Are you sure to delete the user?');
    });

    it('cancel event should trigger when user tries to exit modal', () => {
        // Arrange
        const props = {
            Cancel: jasmine.createSpy(),
            Ok: jasmine.createSpy(),
            element: <div>Are you sure to delete the user?</div>,
            title: 'Delete User',
            okayLabel: 'OK',
            cancelLabel: 'Cancel',
            hideOk: false,
            showDialog: true
        } as IModalDialogProps;

        // Act
        const modalDialog = shallow(<ModalDialog {...props} />);
        modalDialog.find('.btn-default').simulate('click');

        // Assert
        expect(props.Cancel).toHaveBeenCalled();
    });

    it('ok event should trigger when user submit the data', () => {
        // Arrange
        const props = {
            Cancel: jasmine.createSpy(),
            Ok: jasmine.createSpy(),
            element: <div>Are you sure to delete the user?</div>,
            title: 'Delete User',
            okayLabel: 'OK',
            cancelLabel: 'Cancel',
            hideOk: false,
            showDialog: true
        } as IModalDialogProps;

        // Act
        const modalDialog = shallow(<ModalDialog {...props} />);
        modalDialog.find('.btn-primary').simulate('click');

        // Assert
        expect(props.Ok).toHaveBeenCalled();
    });
});
