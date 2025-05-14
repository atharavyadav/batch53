// const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
// const browserManager = require("../pages/browserResusableComponents");
// const logger = require("../pages/logger");

// BeforeAll(async function () {
//     logger.initialize(); // Initialize the logger before any logging
//     await browserManager.launchBrowser(); // Launch the browser
// });

// Given("Navigating to the Pacrise page is valiudated", async function () {
//     logger.log("opening the browser...");
//     const page = await browserManager.getPage();
//     logger.log("user is working on the mentioned url");
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// });

// When("Radio button is selcted as per the chioce {string}", async function (RadioButon) {
//      const page = await browserManager.getPage();
//     let countofradiobutton =  await page.locator("//input[@name='radioButton']").count()
//     logger.log("count of radio button is" + await countofradiobutton);
//     for(let i=1;i<=await countofradiobutton;i++)
//     {
        
//          let radiotext = await page.locator("(//input[@name='radioButton'])["+i+"]").getAttribute("value")
//          console.log("valuea are" + await radiotext)
//         if( radiotext== RadioButon)
//         {
//             await page.locator("(//input[@name='radioButton'])["+i+"]").click()
//         }
       
//     }

// });

// AfterAll(async function () {
//     logger.log("Closing the browser...");
//     await browserManager.closeBrowser();
//     logger.log("Browser closed successfully.");
// });