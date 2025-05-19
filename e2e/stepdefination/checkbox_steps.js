// const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
// const browserManager = require("../pages/browserResusableComponents");
// const logger = require("../pages/logger");

// BeforeAll(async function () {
//     logger.initialize(); // Initialize the logger before any logging
//     await browserManager.launchBrowser(); // Launch the browser
// });


// Given("Navigating to the url to handle checkbox" ,async function(){

// logger.log("opening the browser...");
//     const page = await browserManager.getPage();
//     logger.log("user is working on the mentioned url");
//     await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

// })

// When("Checkbox is selected {string} and verified is its checked {string}" ,async function(checkboxvalue,assertvalue){

// const page = await browserManager.getPage();
//  let count = await page.locator("//input[@type='checkbox']").count()
//  console.log("count of all ele " + await count)
//  for(let i=1;i<=await count;i++)
//  {
//    let alltext =  await page.locator("(//input[@type='checkbox'])["+i+"]").getAttribute("value")
//    if(alltext==checkboxvalue)
//    {
//      await page.locator("(//input[@type='checkbox'])["+i+"]").check()
//      let flag =  await page.locator("(//input[@type='checkbox'])["+i+"]").isChecked()
    
//      if(await flag==await assertvalue)
//      {
//       console.log("checkbox is checked   " + await flag)
//      }
//    }
//  }

// })


// AfterAll(async function () {
//     logger.log("Closing the browser...");
//     await browserManager.closeBrowser();
//     logger.log("Browser closed successfully.");
// });