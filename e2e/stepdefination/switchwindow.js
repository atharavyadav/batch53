const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/browserResusableComponents");
const logger = require("../pages/logger");

BeforeAll(async function () {
    logger.initialize(); // Initialize the logger before any logging
    await browserManager.launchBrowser(); // Launch the browser
});

Given("Navigating to the url for windows switch", async function () {
   
    logger.log("opening the browser...");
    const page = await browserManager.getPage();
    logger.log("user is working on the mentioned url");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
});
       


When("user switch the window and vertifies the title {string}", async function (windowtitle) {
    const page = await browserManager.getPage();
    const page1Promise = await page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Open Window' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Courses', exact: true }).click();
});

 
AfterAll(async function () {
    logger.log("Closing the browser...");
    await browserManager.closeBrowser();
    logger.log("Browser closed successfully.");
});