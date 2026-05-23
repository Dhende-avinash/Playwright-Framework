import{test,expect}from'@playwright/test';

import * as path from 'path';

test.skip('Upload Single File',async({page})=>{
   
    await page.goto(" https://testpages.eviltester.com/pages/files/file-upload/");
                                  //Folder name ||file name
const filePath = path.join(__dirname, 'Upload Files','one.txt');

//await page.locator("#fileinput").setInputFiles(filePath);
                //Or
await page.setInputFiles('#fileinput',filePath);

await page.waitForTimeout(3000);

})


test('Upload Multiple File',async({page})=>{
   
    await page.goto("http://uitestingplayground.com/upload");

    const filePath1 = path.join(__dirname, 'Upload Files','one.txt');
    const filePath2 = path.join(__dirname, 'Upload Files','Two.txt');

    const frame = page.frameLocator("iframe[src='/static/upload.html']");

    await frame.locator("input[type='file']").waitFor({state:'attached'});

    await frame.locator("input[type='file']").setInputFiles([filePath1,filePath2]);

    await page.waitForTimeout(3000);


})