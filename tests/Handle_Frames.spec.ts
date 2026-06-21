import {test, expect} from '@playwright/test';
// To RUN THIS FILE FIRST SKIP ALL TEST OR RUN ONLY ONE
test('Handling Frames Using Name', async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/embedded-pages/frames/");

    //page.frames()-->To get no of frames in webpage, it gives refference of frames
    // return Array of frames, means start from 0,
    const noOfFrames = page.frames();
    console.log(`No Of Frames in WebPage:${noOfFrames.length}`);

    const frame1 = page.frame({name:'left'});

    //frame1.waitForSelector("h1",{state:'visible'}); it show null error bcoz above framename can be there or cannot be there
    // for better practice use if else block. 
    if(frame1)
    {
        const ele = await frame1.waitForSelector("h1",{state:'visible'});
        const text = frame1.locator("h1");
        await expect(text).toHaveText("Left");

    }
    else
    {
        console.error("The Left Frame is Not Present On the page.");
    }

})


test('Handling Frames Using Url', async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/embedded-pages/frames/");

    const noOfFrames = page.frames();
    console.log(`No Of Frames in WebPage:${noOfFrames.length}`);

    // for each loop for iterating get url
    noOfFrames.forEach(frame2=>{
        console.log(frame2.url());

    })

    const frame2 = page.frame({url:/.*middle\.html/}); // this url copied from src in devtool, 
                             // it is best practice for partial url with regex
    if(frame2)
    {
        await frame2.waitForSelector("h1",{state:'visible'});
        const ele = frame2.locator("h1");

        await expect(ele).toHaveText("Middle");
    }
})

test('Handling Frames Using Index', async({page})=>{
    await page.goto("https://testpages.eviltester.com/pages/embedded-pages/frames/");

    const noOfFrames= page.frames();//-->returns array of frames
    console.log(`No Of Frames in WebPage:${noOfFrames.length}`);
     noOfFrames.forEach(frame2=>{
        console.log(frame2.url());

    })

    const frame3 = noOfFrames[4];

    await expect(frame3.locator("h1")).toHaveText("Right");// Assertions

})


test('Handling Nested Frames or use of frameLocator', async({page})=>{

await page.goto("https://play1.automationcamp.ir/frames.html");

// if we take frame locator then use frameLocator()
const parentFrame = await page.frameLocator("#frame1"); //here we use locator but if use url name-->page.frame({name:'nameOfFrame, ex.src value'})
const childFrame = parentFrame.frameLocator("#frame2");
await childFrame.locator("#click_me_2").click();

await expect(childFrame.locator("#click_me_2")).toHaveText("Clicked")
await page.waitForTimeout(5000);
})