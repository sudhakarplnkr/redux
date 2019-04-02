import * as React from 'react';
import { shallow } from 'enzyme';
import ConfigurationComponent from '../../components/ConfigurationComponent';
import { IConfigurationComponentProps } from '../../models/User';

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
});
