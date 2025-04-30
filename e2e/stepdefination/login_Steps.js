const { Given, When, Then, BeforeAll, AfterAll } = require("@cucumber/cucumber");
const browserManager = require("../pages/browserResusableComponents"); // Corrected path
const { expect } = require("assert");

let browser, page;

BeforeAll(async function () {
    await browserManager.launchBrowser(); // Launch the browser
});

Given('the user is on the login page', async function () {
    const page = browserManager.getPage(); // Get the page object
    await page.goto("https://demo.guru99.com/test/newtours/register.php");
});

When(
    'the user enters contact information {string} {string} {string} {string}',
    async function (firstname, lastname, phone, email) {
        const page = browserManager.getPage(); // Get the page object
        await page.locator("//input[@name='firstName']").fill(firstname);
        await page.locator("//input[@name='lastName']").fill(lastname);
        await page.locator('input[name="phone"]').fill(phone);
        await page.locator("//input[@id='userName']").fill(email);
    }
);

AfterAll(async function () {
    await browserManager.closeBrowser(); // Close the browser
});