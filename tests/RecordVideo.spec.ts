import {test, expect}from '@playwright/test';
test('Record Video-: retain-on-failure',async({page})=>{
    /*to record video write in config file "video:'on'or'reatin video' etc."*/

     await page.goto("https://www.amazon.in/");

    await page.locator(".twotabsearchtextbox").fill("Books");
})