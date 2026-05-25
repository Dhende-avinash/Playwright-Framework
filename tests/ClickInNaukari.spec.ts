import {test, expect} from '@playwright/test'

test("Click on Naukari Page",async({page})=>{
    await page.goto("https://www.naukri.com/")

    await page.locator("//span[normalize-space()='Services']").click();




})