import { by, element } from 'protractor';
class EventRegistrationPo {
    public transportTypeClick = () => {
        element(by.css('[type="checkbox"]')).click();
    };

    public onCancel = () => {
        element(by.xpath('//*[@id="root"]/div/form/div[3]/a')).click();
    };

    public onRegister = () => {
        element(by.xpath('//*[@id="root"]/div/form/div[3]/button')).click();
    };
}

export default new EventRegistrationPo();
