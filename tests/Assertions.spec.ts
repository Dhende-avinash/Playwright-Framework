import {test, expect} from '@playwright/test';

test.skip('Hard Assertions1', async({page})=>{

    await page.goto('https://www.saucedemo.com/')

    await expect(page).toHaveTitle("Swag Labs");

    await expect(page).toHaveURL("https://www.saucedemo.com/");

    const PageLogo = await page.locator(".login_logo");
    await expect(PageLogo).toBeVisible();

    const UNenable = await page.locator('#user-name');
    await expect(UNenable).toBeEnabled();

    const PageText = await page.locator('#login_credentials h4');// parent to child locator with space
    await expect(PageText).toHaveText("Accepted usernames are:");

    const Partialtext = page.locator(".login_password h4");
    await expect(Partialtext).toContainText('users:');

    const AttributeValue = page.locator("#user-name");
    await expect(AttributeValue).toHaveAttribute('placeholder','Username');

    await expect(AttributeValue).toHaveClass('input_error form_input');
                   
    //OR we can write direct assertions.
    await expect(page.locator("#user-name")).toHaveAttribute('placeholder','Username');

})

test.skip('Hard Assertions2', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await page.locator('#name').fill('Testing');

    await page.locator('#email').fill('Shastra');

    await expect(page.locator('#name')).toHaveValue('Testing');

    await page.locator('#gender').check();
    await expect(page.locator('#gender')).toBeChecked();

    await page.locator('#hobbies').check();
    await expect(page.locator('#hobbies')).toBeChecked();

})

test.skip('Negative Assertions', async({page})=>{
     await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

     await expect(page.locator('#name')).not.toHaveValue('Testing');

    await expect(page.locator('#gender')).not.toBeChecked();

    await expect(page.locator('#hobbies')).not.toBeChecked();

})


test.skip('Soft Assertions', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await page.locator('#name').fill('Testing');

    await page.locator('#email').fill('Shastra');

    await expect.soft(page.locator('#name')).toHaveValue('Testing1');

    await page.locator('#gender').check();
    await expect(page.locator('#gender')).toBeChecked();

    await page.locator('#hobbies').check();
    await expect(page.locator('#hobbies')).toBeChecked();

})
