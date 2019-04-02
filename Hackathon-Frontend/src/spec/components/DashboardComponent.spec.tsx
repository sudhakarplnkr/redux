import * as React from 'react';
import { shallow } from 'enzyme';
import DashboardComponent from '../../components/DashboardComponent';

describe('DashboardComponent', () => {
  it('loading without crashing', () => {
    // Act
    const dashboard = shallow(<DashboardComponent />);

    // Assert
    expect(dashboard.length).toBe(1);
  });
});
