import { chromium } from "@playwright/test";

async function globalSetUp() {

    const browser = await chromium.launch();
    const context = await browser.newContext({
        httpCredentials: {
            username: 'Admin',
            password: 'Admin'
        }
    });

    const page = await context.newPage();
    await page.goto("https://the-internet.herokuapp.com/basic_auth");
    console.log("Basic Authentication Complete.");

    await context.storageState({ path: 'auth.json'});
    await browser.close();

}
export default globalSetUp;