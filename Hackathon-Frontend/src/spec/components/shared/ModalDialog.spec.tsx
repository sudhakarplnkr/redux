import * as React from 'react';
import { shallow } from 'enzyme';
import ModalDialog from '../../../components/shared/ModalDialog';
import { IModalDialogProps } from '../../../models/modalDialog';

describe('ModalDialog', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            showDialog: true
        } as IModalDialogProps;

        // Act
        const configuration = shallow(<ModalDialog {...props} />);

        // Assert
        expect(configuration.length).toBe(1);
    });
});
