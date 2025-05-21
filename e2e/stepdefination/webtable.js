const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/browserResusableComponents");
const logger = require("../pages/logger");

BeforeAll(async function () {
    logger.initialize(); // Initialize the logger
    logger.log("Launching the browser...");
    await browserManager.launchBrowser();
    logger.log("Browser launched successfully.");
});

Given("User launches url for webtable", async function() {
  try {
    const page = browserManager.getPage();
    logger.log("Navigating to the login page...");
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    logger.log("User is on the login page.");
    await page.waitForTimeout(3000);
  } catch (err) {
    logger.log("Error in Given step: " + err.message);
    throw err;
  }
});


Then("user validates datatable",async function() {
  const page = browserManager.getPage();
 let totalrowcount = await page.locator("(//table[@id='product'])[1]//tr").count();
 console.log("Total number of rows in the table: " + await totalrowcount);
 for(let i=1;i<=await totalrowcount;i++)
 {
      let alltext = await page.locator("(//table[@id='product'])[1]//tr").nth(i).innerText()
      console.log("Text of row " + i + ": " + await alltext);
 }
})