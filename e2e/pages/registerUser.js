// const logger = require("./logger");

// class RegisterUser {
//     constructor() {
//         // Define all XPath selectors in the constructor
//         this.firstNameInput = "//input[@name='firstName']";
//         this.lastNameInput = "//input[@name='lastName']";
//         this.phoneInput = "input[name='phone']";
//         this.emailInput = "//input[@id='userName']";
//         this.country="//select[@name='country']"
//     }

//     async entercontactInformation(page, firstname, lastname, phone, email,dropdown) {
//         logger.log(`Entering contact information: ${firstname}, ${lastname}, ${phone}, ${email}`);
//         await page.locator(this.firstNameInput).fill(firstname);
//         await page.locator(this.lastNameInput).fill(lastname);
//         await page.locator(this.phoneInput).fill(phone);
//         await page.locator(this.emailInput).fill(email);
//         await page.locator(this.country).selectOptions(dropdown)
//         logger.log("Contact information entered successfully.");
//     }
// }

// module.exports = new RegisterUser();