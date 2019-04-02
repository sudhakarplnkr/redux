import { shallow } from 'enzyme';

const shallowWithStore = (component: React.ReactElement, store: any) => {
    const context = {
        store
    };
    return shallow(component, { context });
};

export default shallowWithStore;
