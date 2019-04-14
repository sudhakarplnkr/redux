import associateLoginPo from './pom/associateLoginPo';
import upcomingEventPo from './pom/upcomingEventPo';
import eventDetailPo from './pom/eventDetailPo';
import eventRegistrationPo from './pom/eventRegistrationPo';
import logoutPo from './pom/logoutPo';
import url from './utils/url';
import { element, by, browser } from 'protractor';

describe('Associate upcoming event', function() {
    beforeAll(() => associateLoginPo.associateLogin(466590));

    it('upcoming events successfully displayed after login', function() {
        // Then
        expect(url.getCurrentUrl()).toBe(`${url.baseUrl}/#/upcoming-events`);
    });

    it('show event detail when clicking on event title', function() {
        // When
        upcomingEventPo.eventTitleClick();

        // Then
        expect(url.getCurrentUrl()).toContain(`event-detail`);
    });

    it('cancel registeration', function() {
        // When
        eventDetailPo.onRegister();
        eventRegistrationPo.transportTypeClick();
        eventRegistrationPo.onCancel();

        // Then
        expect(url.getCurrentUrl()).toBe(`${url.baseUrl}/#/upcoming-events`);
    });

    it('registeration', function() {
        // When
        browser.get('#/upcoming-events');
        upcomingEventPo.eventTitleClick();
        eventDetailPo.onRegister();
        eventRegistrationPo.transportTypeClick();
        eventRegistrationPo.onRegister();

        // Then
        expect(element(by.className('rrt-text')).getAttribute('innerHTML')).toContain('Associate already exist');
    });

    afterAll(() => logoutPo.logout());
});
