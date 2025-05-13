const { chromium } = require("playwright");

class mybrowserlauncher
{

    constructor()
    {
       this.browser = null;
        this.context = null;
        this.page = null;   
    }

     async launchBrowser() {
        // logger.info("Launching the browser...");
        this.browser = await chromium.launch({ headless: false }); // Launch browser
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        // logger.info("Browser launched successfully.");
    }

}