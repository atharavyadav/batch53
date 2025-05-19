// const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
// const browserManager = require("../pages/browserResusableComponents");
// const logger = require("../pages/logger");

// BeforeAll(async function () {
//     logger.initialize(); // Initialize the logger before any logging
//     await browserManager.launchBrowser(); // Launch the browser
// });

// Given("Navigating to the Pacrise page and dropdown feature is verified", async function () {
//     logger.log("opening the browser...");
//     const page = await browserManager.getPage();
//     logger.log("user is working on the mentioned url");
//     await page.goto("https://qaauth.axalta.com/am/XUI/?realm=/alpha&authIndexType=service&authIndexValue=AxRegistration&locale=en#/");
// });

// Given("user selects the desired dropdown value {string}", async function (dropdown) {
//     const page = await browserManager.getPage();
// // let countofdropdown = await page.locator("//select[@id='dropdown-class-example']//option").count()
// // for(let i=2;i<=await countofdropdown;i++)
// // {
// // let text = await page.locator("//select[@id='dropdown-class-example']//option["+i+"]").textContent()
// // console.log("valuea are " + text)
// // }

// //     await page.locator("//select[@id='dropdown-class-example']").selectOption(dropdown)

// //     await page.locator("//input[@id='autocomplete']").fill(dropdown)

//   await page.locator("(//div[@class='multiselect__select'])[1]").click()
//   await page.getByRole('textbox', { name: 'Country' }).fill('India');
//  await page.getByRole('option', { name: 'India', exact: true }).locator('span').first().click();
// });


// AfterAll(async function () {
//     logger.log("Closing the browser...");
//     await browserManager.closeBrowser();
//     logger.log("Browser closed successfully.");
// });