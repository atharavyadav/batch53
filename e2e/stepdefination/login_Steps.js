const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/browserResusableComponents");
const logger = require("../pages/logger");
const RegisterUser = require("../pages/registerUser");
const registerUserData = require("../pages/duplicateregisterUser")

BeforeAll(async function () {
    logger.initialize(); // Initialize the logger
    logger.log("Launching the browser...");
    await browserManager.launchBrowser();
    logger.log("Browser launched successfully.");
});

Given('the user is on the login page', async function () {
    const page = browserManager.getPage();
    logger.log("Navigating to the login page...");
    await page.goto("https://demo.guru99.com/test/newtours/register.php");
    logger.log("User is on the login page.");
});

When(
    'the user enters contact information {string} {string} {string} {string}',
    async function (firstname, lastname, phone, email) {
        registerUserData.contactinfromation(firstname, lastname, phone, email)
        
        // const page = browserManager.getPage(); // Get the shared page instance
        // await RegisterUser.entercontactInformation(page, firstname, lastname, phone, email); // Pass the page instance
    
    
    }
);

AfterAll(async function () {
    logger.log("Closing the browser...");
    await browserManager.closeBrowser();
    logger.log("Browser closed successfully.");
});