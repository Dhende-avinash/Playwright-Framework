import {test, expect}from '@playwright/test'
// To run This File, First use .only or .skip to avoid test fail
test('Take screenshots',async({page})=>{
    await page.goto("https://www.amazon.in/");

    //await page.screenshot({path:'amazon1.png'});
    
    //await page.screenshot({path:'Screenshots/amazon1.png'});
    /*Take SS of visible part of web page*/

    //await page.screenshot({path:'Screenshots/amazon2.png',fullPage:true});
    /*Take SS of full web page including header and footer*/

    await page.screenshot({path:`Screenshots/amazon Full SS -${Date.now()}.png`,fullPage:true}); //`_`:- Back tick
    /*Append timestamp to avoid overwrittern file*/

})
test('Take screenshots using congig file',async({page})=>{
     /*to run this test first un comment screenshot line in config file*/
    await page.goto("https://www.amazon.in/");

    await page.locator(".twotabsearchtextbox").fill("Books");
    /*in config file write "screenshot: off or on or when failure" in use block */
    await page.screenshot({path:`Screenshots/amazon Full SS -${Date.now()}.png`,fullPage:true});
   
})
test('Take screenshots specific element',async({page})=>{
   
    await page.goto("https://www.amazon.in/");

    const element = await page.$("#twotabsearchtextbox");
    await element?.screenshot({path:'Screenshots/amazon Full.png'})
   
})