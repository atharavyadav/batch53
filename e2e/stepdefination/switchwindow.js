const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/browserResusableComponents");
const logger = require("../pages/logger");

BeforeAll(async function () {
    logger.initialize();
    logger.log("Launching the browser...");
    await browserManager.launchBrowser();
    logger.log("Browser launched.");
});

Given("Navigating to the url for windows switch", async function () {
    logger.log("Getting page instance...");
    const page = await browserManager.getPage();
    logger.log("Navigating to the URL...");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    logger.log("Navigation successful");
});

When("user switch the window and vertifies the title {string}", async function (windowtitle) {
    const page = await browserManager.getPage();
    // await page.getByRole('button', { name: 'Open Tab' }).click();
    // const page1 = page.waitForEvent('popup');
    // logger.log("Popup window opened.");
    //     const actualTitle = await page1.title();
    //     console.log("Popup window title: " + actualTitle);

    const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Tab' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'About us', exact: true }).click()
        
});

AfterAll(async function () {
    logger.log("Closing the browser...");
    await browserManager.closeBrowser();
    logger.log("Browser closed successfully.");
});