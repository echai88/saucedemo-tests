const path = require('path');

exports.config = {
  runner: 'local',

  baseUrl: 'https://www.saucedemo.com',

  specs: [
    './saucedemo-tests/specs/purchase/**.js',
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--disable-gpu',
        '--window-size=1920,1080',
      ],
    },
  }],

  bail: 0,

  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,

  logLevel: 'trace',
  outputDir: path.resolve(__dirname, 'logs'),

  services: ['chromedriver'],
  reporters: [['allure', {
    outputDir: 'allure-results',
  }]],

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 90000,
  },
};
