import { browser, by, element } from 'protractor';
class LoginPo {
    public adminLogin = (username: string, password: string) => {
        browser.get('/login');
        element(by.css('[name="username"]')).sendKeys(username);
        element(by.css('[name="password"]')).sendKeys(password);
        element(by.id('login')).click();
        return browser.wait(async () => {
            const url = await browser.getCurrentUrl();
            return /upcoming-events/.test(url);
        }, 10000);
    };
}

export default new LoginPo();
