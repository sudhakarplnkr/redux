const Jasmine = require('jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();
var reporter = new JasmineConsoleReporter({
    colors: 1,
    cleanStack: 3,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});
jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile('spec/support/jasmine.json');
process.env.PORT = 3011;
process.env.MONGO_DB_CONNECTION = 'mongodb://127.0.0.1:27017/fse';
jasmine.execute();
