module.exports = {
  default: {
    require: ["./e2e/stepdefination/**/*.js"],
    format: ["progress"],
    paths: ["./e2e/featureFiles/**/*.feature"],
    timeout: 120000, // Set global timeout to 120 seconds
  },
};