import * as React from 'react';
import { shallow } from 'enzyme';
import RegistrationComponent from '../../../components/registrations/RegistrationComponent';
import { IAssociateProps, IAssociateModel } from '../../../models/Registration';

describe('AssociateLoginComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {} as IAssociateProps;

        // Act
        const component = shallow(<RegistrationComponent {...props} />);

        // Assert
        expect(component.length).toBe(1);
    });

    it('register button should be disabled if own transport type and boarding point is not selected', () => {
        // Arrange
        const props = {
            associateModel: {
                AssociateId: 466590
            } as IAssociateModel
        } as IAssociateProps;

        // Act
        const component = shallow(<RegistrationComponent {...props} />);

        // Assert
        expect(component.find('.btn-success').props().disabled).toBeTruthy();
    });

    it('register button should be enabled either own transport type or boarding point is selected', () => {
        // Arrange
        const props = {
            associateModel: {
                AssociateId: 466590,
                OwnTransport: true
            } as IAssociateModel
        } as IAssociateProps;

        // Act
        const component = shallow(<RegistrationComponent {...props} />);

        // Assert
        expect(component.find('button').props().disabled).toBeFalsy();
    });

    it('own transport transport change event triggered when own transport transport checkbox checked', () => {
        // Arrange
        const props = {
            associateModel: {
                AssociateId: 466590,
                OwnTransport: true
            } as IAssociateModel,
            updateAssociateDetails: jasmine.createSpy(),
            saveRegistration: jasmine.createSpy()
        } as IAssociateProps;

        // Act
        const component = shallow(<RegistrationComponent {...props} />);
        component.find('[type="checkbox"]').simulate('change', { target: { checked: true } });

        // Assert
        expect(props.updateAssociateDetails).toHaveBeenCalled();
    });

    it('registration submit should trigget when register button clicked', () => {
        // Arrange
        const props = {
            associateModel: {
                AssociateId: 466590,
                OwnTransport: true
            } as IAssociateModel,
            updateAssociateDetails: jasmine.createSpy(),
            saveRegistration: jasmine.createSpy()
        } as IAssociateProps;

        // Act
        const component = shallow(<RegistrationComponent {...props} />);
        component.find('button').simulate('click');

        // Assert
        expect(props.saveRegistration).toHaveBeenCalled();
    });
});
