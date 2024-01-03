const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://technovaschool.github.io/TechNovaBank",
    

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

 
});
