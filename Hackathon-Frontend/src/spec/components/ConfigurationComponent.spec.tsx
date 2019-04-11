import * as React from 'react';
import { shallow } from 'enzyme';
import ConfigurationComponent from '../../components/ConfigurationComponent';
import { IConfigurationComponentProps, IUser } from '../../models/User';

describe('ConfigurationComponent', () => {
    it('loading without crashing', () => {
        // Arrange
        const props = {
            configurationModel: {
                user: {}
            }
        } as IConfigurationComponentProps;

        // Act
        const configuration = shallow(<ConfigurationComponent {...props} />);

        // Assert
        expect(configuration.length).toBe(1);
    });

    it('loading users list', () => {
        // Arrange
        const props = {
            configurationModel: {
                user: {},
                users: [{ AssociateId: 466590, Username: 'sudhakar', Email: '466590@cognizant.com', FirstName: 'Sudhakar', LastName: 'S', Phone: 7200060335, Role: 'Admin', _id: '1' } as IUser, { AssociateId: 721602, Username: 'vetri', Email: '721602@cognizant.com', FirstName: 'vetri', LastName: 'india', Phone: 9865603008, Role: 'Admin', _id: '2' } as IUser]
            }
        } as IConfigurationComponentProps;

        // Act
        const configuration = shallow(<ConfigurationComponent {...props} />);
        
        // Assert
        expect(configuration.find('div>table>tbody>tr').length).toBe(2);
    });
});
