import * as React from 'react';
import { shallow } from 'enzyme';
import ModalDialog from '../../components/shared/ModalDialog';
import { IModalDialogProps } from '../../models/modalDialog';

describe('ModalDialog', () => {
    it('loading without crashing', () => {
        // Arrage
        const props = {} as IModalDialogProps;

        // Act
        const singleRegistration = shallow(<ModalDialog {...props} />);

        // Assert
        expect(singleRegistration.length).toBe(1);
    });
});
