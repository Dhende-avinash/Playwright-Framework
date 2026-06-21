import {test, expect, devices} from '@playwright/test'

test.use({...devices['Galaxy S24']})

test("Mobile Device Testing", async({page})=>{

    await page.goto("https://www.saucedemo.com/");

    await page.waitForTimeout(5000);
})