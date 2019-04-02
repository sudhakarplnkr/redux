import { element, by } from 'protractor';
class UpcomingEventPo {
    public eventTitleClick = () => {
        element(by.xpath('//*[@id="root"]/div/div/table/tbody/tr[1]/td[1]/a')).click();
    };
}

export default new UpcomingEventPo();
