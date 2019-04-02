import { browser, by, element } from 'protractor';
class AssociateLoginPo {
    private setAssociateId = (associateId: number) => {
        element(by.css('[name="associateId"]')).sendKeys(associateId);
    };

    private loginSubmit = () => {
        element(by.id('associateLogin')).click();
    };

    public associateLogin = (associateId: number) => {
        browser.get('/associate-login');
        this.setAssociateId(associateId);
        this.loginSubmit();

        return browser.wait(async () => {
            const url = await browser.getCurrentUrl();
            return /upcoming-events/.test(url);
        }, 10000);
    };
}

export default new AssociateLoginPo();
