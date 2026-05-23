import {test, Browser , Page, chromium} from "@playwright/test";
//page=class, Browser=class, chromium=object
let browser: Browser; //browser variable hold the Browser instance 
let page : Page; // similarly like browser
//Page And Browser both are class & declare Globally 

test.describe("Hooks",()=>
{
    test.beforeAll(async()=>
    {
        console.log("Luanch the Browser");
        browser = await chromium.launch({headless:false});//Launch Broswer
        page = await browser.newPage();//open page
    })
    test.afterAll(async()=>
    {
        console.log("Closing Browser");
        await browser.close();
    })
    test.beforeEach(async()=>
    {
        console.log("Launching the Url")
        await page.goto("https://www.google.com/");

    })
    test.afterEach(async()=>
    {
        console.log("Test is Completed")

    })
    test("Test 1 : Search Playwright Automation",async({})=>
    {
        await page.locator("#APjFqb").fill("Playwright Automation");
        await page.keyboard.press('Enter');
        console.log("Test 1 Excution is completed.");
    })
    test("Test 2 : Search selenium Automation",async({})=>
    {
        await page.locator("#APjFqb").fill("search Selenium automation");
        await page.keyboard.press('Enter');
        console.log("Test 2 Excution is completed.");
    })


})