import * as React from 'react';
import { shallow } from 'enzyme';
import DashboardComponent from '../../components/DashboardComponent';
import { IDashboardProps, IRegisteredAssociate } from '../../models/Dashboard';

describe('DashboardComponent', () => {
    it('loading without crashing', () => {
        // Arrange

        // Act
        const dashboard = shallow(<DashboardComponent registeredAssociate={[]} />);

        // Assert
        expect(dashboard.length).toBe(1);
    });

    it('loading dashboard', () => {
        // Arrange
        const props = {
            registeredAssociate: [{
                EventTitle: 'Title 3',
                TotalRegisteredAssociate: 1
            }] as IRegisteredAssociate[]
        } as IDashboardProps;

        // Act
        const dashboard = shallow(<DashboardComponent {...props} />);

        // Assert
        expect(dashboard.length).toBe(1);
    });
});
