import { by, element } from 'protractor';
class EventDetailPo {
    public onRegister = () => {
        element(by.id('register')).click();
    };
}

export default new EventDetailPo();
