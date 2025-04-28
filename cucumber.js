module.exports = {
  default: {
    require: ["./e2e/stepdefination/**/*.js"], // Correct path to step definitions
    format: ["progress"],
    paths: ["./e2e/featureFiles/**/*.feature"], // Correct path to feature files
    timeout: 60000, // Set global timeout to 60 seconds
  },
};