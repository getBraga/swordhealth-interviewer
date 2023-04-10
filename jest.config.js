module.exports = {
    "moduleFileExtensions": [
        "js",
        "json",
        "vue"
      ],
      testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
     },
    
      "testEnvironment": "jsdom",
      "transform": {
        ".*\\.(js)$": "babel-jest",
        ".*\\.(vue)$": "@vue/vue2-jest"
      }
  };