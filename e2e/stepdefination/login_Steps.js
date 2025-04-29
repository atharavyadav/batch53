const { Given, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { chromium } = require('playwright');

let browser, page;

Given('the user is on the login page', async function () {
    this.setTimeout(20000); // Set timeout to 20 seconds
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto('https://demo.guru99.com/test/newtours/register.php'); // Replace with your login page URL
});

When(
    'the user enters contact information {string} {string} {string} {string}',
    async function (firstname, lastname, phone, email) {
       await page.locator("//input[@name='firstName']").fill(firstname)
       await page.locator("//input[@name='lastName']").fill(lastname)
       await page.locator('input[name="phone"]').fill(phone);
       await page.locator("//input[@id='userName']").fill(email);
    }
);

