import loginPo from './pom/loginPo';
import logoutPo from './pom/logoutPo';
import upcomingEventPo from './pom/upcomingEventPo';
import url from './utils/url';

describe('Admin upcoming event', function() {

    beforeAll(() => loginPo.adminLogin('sudhakar', 'password'));

    it('upcoming events successfully displayed after login', function() {
        // Then
        expect(url.getCurrentUrl()).toBe(`${url.baseUrl}/upcoming-events`);
    });

    it('show event detail when clicking on event title', function() {
        // When
        upcomingEventPo.eventTitleClick();

        // Then
        expect(url.getCurrentUrl()).toContain(`event-detail`);
    });

    afterAll(() => logoutPo.logout());
});
