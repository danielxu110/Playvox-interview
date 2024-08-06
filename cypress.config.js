const { defineConfig } = require('cypress')

module.exports = defineConfig({
  videoCompression: 0,
  viewportWidth: 1440,
  viewportHeight: 920,
  failOnStatusCode: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  pageLoadTimeout: 60000,
  taskTimeout: 20000,
  chromeWebSecurity: false,
  numTestsKeptInMemory: 1,
  matchCase: true,

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    supportFile: "cypress/support/index.ts",
  },
})
