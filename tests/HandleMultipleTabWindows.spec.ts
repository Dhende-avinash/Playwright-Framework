import{test, expect, chromium, Page} from '@playwright/test'

test('Multiple Tabs', async({page : Page})=>{

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demoqa.com/");

    await page.locator("text = Alerts, Frame & Windows").click();
    await page.locator("text = Browser Windows").click();

    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        await page.locator("#tabButton").click()
    ])

    await newTab.waitForLoadState();// after this line put assertion if needed
    console.log("New tab url :", newTab.url());
    await newTab.close();

})

test('Multiple Windows', async({page : Page})=>{

    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demoqa.com/");

    await page.locator("text = Alerts, Frame & Windows").click();
    await page.locator("text = Browser Windows").click();

    const [newWindow] = await Promise.all([
        context.waitForEvent("page"),
        await page.locator("#windowButton").click()
    ])

    await newWindow.waitForLoadState();// after this line put assertion if needed
    console.log("New tab url :", newWindow.url());
    await newWindow.close();

})