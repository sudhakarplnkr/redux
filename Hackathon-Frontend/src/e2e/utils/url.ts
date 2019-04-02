import { browser } from 'protractor';

class Url {
    public getCurrentUrl = () => {
        return browser.getCurrentUrl();
    };
    public get baseUrl(): string {
        return browser.baseUrl;
    }
}

export default new Url();
