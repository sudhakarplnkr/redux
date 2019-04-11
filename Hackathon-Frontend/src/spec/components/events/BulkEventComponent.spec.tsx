import * as React from 'react';
import { shallow } from 'enzyme';
import BulkEventComponent from '../../../components/events/BulkEventComponent';
import { IBulkEventComponentProps } from '../../../models/Event';
import { FileParameter } from '../../../utils/FileManagementClient';

describe('BulkEventComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IBulkEventComponentProps;

        // Act
        const component = shallow(<BulkEventComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('bulk upload submit button should be disbled untill file selected', () => {
        // Arrange
        const props = {} as IBulkEventComponentProps;

        // Act
        const component = shallow(<BulkEventComponent {...props} />);

        // Assert
        expect(component.find('button').html()).toContain('disabled');
    });

    it('bulk upload submit button should be enabled once file selected', () => {
        // Arrange
        const props = {
            fileParameter: {
                data: {},
                fileName: 'test'
            } as FileParameter
        } as IBulkEventComponentProps;

        // Act
        const component = shallow(<BulkEventComponent {...props} />);

        // Assert
        expect(component.find('button').html()).not.toContain('disabled');
    });
});
