let suites = {
    e2e2: '../**/*e2e.ts'
};
exports.config = {
    suites: suites,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--disable-web-security', '--user-data-dir=~/.e2e-chrome-profile']
        }
    },
    specs: ['src/e2e/**/*.e2e.js'],
    baseUrl: 'http://localhost:3000',
    framework: 'jasmine',
    onPrepare: () => {
        const protractor = require('protractor');
        const { browser } = protractor;
        browser.ignoreSynchronization = true;
        browser
            .manage()
            .window()
            .maximize();
    }
};
