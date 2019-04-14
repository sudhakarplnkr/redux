import { by, element } from 'protractor';
class LogoutPo {
    public logout = () => {
        element(by.css('[href="#/logout"]')).click();
    };
}

export default new LogoutPo();
