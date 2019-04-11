import * as React from 'react';
import { shallow } from 'enzyme';
import BulkRegistrationComponent from '../../../components/registrations/BulkRegistrationComponent';
import { IBulkRegistrationProps } from '../../../models/BulkRegistration';

describe('BulkRegistrationComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('upload button should be disabled until the file selected', () => {
        // Arrange
        const props = {} as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeTruthy();
    });

    it('upload button should be enabled when file selected', () => {
        // Arrange
        const props = {
            fileParameter: {
                data: {},
                fileName: 'test'
            }
        } as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeFalsy();
    });

    it('file upload change event should be trigger when file selected', () => {
        // Arrange
        const props = {
            fileParameter: {
                data: {},
                fileName: 'test'
            },
            onUploadChange: jasmine.createSpy(),
            onUpload: jasmine.createSpy(),
            bulkRegistrationChange: jasmine.createSpy()
        } as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);
        component.find('[name="registration"]').simulate('change', { target: { files: [{}] } });

        // Assert
        expect(props.onUploadChange).toHaveBeenCalled();
    });

    it('file upload change event should not be trigger when file not selected', () => {
        // Arrange
        const props = {
            fileParameter: {
                data: {},
                fileName: 'test'
            },
            onUploadChange: jasmine.createSpy(),
            onUpload: jasmine.createSpy(),
            bulkRegistrationChange: jasmine.createSpy()
        } as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);
        component.find('[name="registration"]').simulate('change', { target: {} });

        // Assert
        expect(props.onUploadChange).not.toHaveBeenCalled();
    });

    it('file submit event should be trigger when upload button clicked', () => {
        // Arrange
        const props = {
            fileParameter: {
                data: {},
                fileName: 'test'
            },
            onUploadChange: jasmine.createSpy(),
            onUpload: jasmine.createSpy(),
            bulkRegistrationChange: jasmine.createSpy()
        } as IBulkRegistrationProps;

        // Act
        const component = shallow(<BulkRegistrationComponent {...props} />);
        component.find('button').simulate('click');

        // Assert
        expect(props.onUpload).toHaveBeenCalled();
    });
});
