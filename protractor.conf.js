exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://www.princiweb.com.br/',

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine2',

  specs: ['src/test/e2e/*.spec.js']
};