const logger = require("./logger");

class RegisterUser {
    constructor() {
        // Define all XPath selectors in the constructor
        this.firstNameInput = "//input[@name='firstName']";
        this.lastNameInput = "//input[@name='lastName']";
        this.phoneInput = "input[name='phone']";
        this.emailInput = "//input[@id='userName']";
    }

    async entercontactInformation(page, firstname, lastname, phone, email) {
        logger.log(`Entering contact information: ${firstname}, ${lastname}, ${phone}, ${email}`);
        // Use the selectors defined in the constructor
        await page.locator(this.firstNameInput).fill(firstname);
        await page.locator(this.lastNameInput).fill(lastname);
        await page.locator(this.phoneInput).fill(phone);
        await page.locator(this.emailInput).fill(email);
        logger.log("Contact information entered successfully.");
    }
}

module.exports = new RegisterUser();