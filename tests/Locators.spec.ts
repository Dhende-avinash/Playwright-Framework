import {test, expect} from '@playwright/test';
// To RUN THIS FILE FIRST SKIP ALL TEST OR RUN ONLY ONE
test('getByRole Locator', async({page})=>{
    await page.goto('https://www.amazon.in/');

    await page.getByRole("searchbox",{name:'Search Amazon.in'}).fill("Mobiles");

    await page.getByRole("button", {name:"Go", exact:true}).click(); 

    //await page.waitForTimeout(5000);// hard coded wait
})

test('getByText Locator', async({page})=>{

    await page.goto('https://www.amazon.in/');

    await page.getByText("Customer Service").click();

    
})

test('getByLabel Locator', async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    const LabelName = await page.getByLabel("Email:");

    await expect(LabelName).toBeVisible();

    

})

test ('getByPlaceholder Locator', async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await page.getByPlaceholder('name@example.com').fill('Avinash');


})

test ('getByAltText Locator', async({page})=>{

    await page.goto('https://www.amazon.in/ref=nav_logo');

    const AltText = await page.getByAltText('Cushion covers, bedsheets & more');

    await expect(AltText).toBeVisible();

   

})

test('getByTitle Locator', async({page})=>{

    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

   const Title1 = await page.getByTitle('back to Selenium Tutorial');

   await expect(Title1).toBeVisible();


})

test ('CSS Locator', async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.locator('#user-name').fill('standard_user');

    await page.getByPlaceholder("Password").fill('secret_sauce');

    //await page.locator("//input[@id='login-button']").click();
    await page.locator('.submit-button.btn_action').click();

})

test('nth() Locator', async({page})=>{

    await page.goto('https://www.amazon.in/ref=nav_logo');

    await page.locator('.nav-input.nav-progressive-attribute').nth(0).fill('Novels');

    await page.waitForTimeout(5000);

    await page.locator('.nav-input.nav-progressive-attribute').nth(1).click();

})

test('Xpath Locator', async({page})=>{

    await page.goto('https://www.amazon.in/ref=nav_logo');

    await page.locator("//input[@id='twotabsearchtextbox']").fill('Bikes');

    await page.waitForTimeout(3000);

    await page.locator("//input[@type='submit']").click();

    await page.waitForTimeout(3000);

    await page.locator("//a[text()='MX Player']").click();

})