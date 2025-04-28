const { Given, When, Then , And} = require('@cucumber/cucumber');
import { test, expect } from '@playwright/test';


Given('I navigate to the login page', async function ({ page }) {
    await page.goto('https://demo.guru99.com/test/newtours/register.php');
})

When('I enter {string} in the username field', async function () {


})

And('I enter {string} in the password field', async function () {

})

And('I click on the login button', async function () {

})

Then('I should see the homepage', async function () {

})