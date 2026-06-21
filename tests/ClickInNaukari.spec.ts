import {test, expect} from '@playwright/test'

test("Click on Ladki Bahin Page",async({page})=>{
    await page.goto("https://ladakibahin.maharashtra.gov.in/")

    await page.locator("//a[contains(text(),'अर्जदार लॉगिन')]").click();

    await expect(page.locator("//h2[normalize-space()='Login']")).toBeVisible();

    console.log("LogIn page Is Visible.");




})