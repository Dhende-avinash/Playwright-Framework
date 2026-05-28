import{test, expect} from '@playwright/test'

test('Validate Input Boxes', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await page.locator("#headingOne .accordion-button.collapsed").click();
    await page.getByText(' Text Box').click();
    await expect(page).toHaveTitle('Selenium Practice - Text Box');
    await expect(page.locator("#TextForm h1")).toHaveText("Text Box")
    
    /*await page.getByPlaceholder('Full Name').fill("Testing Guru");//Or*/ await page.fill('#fullname','Testing Guru');
    
    /*await page.locator('#email').fill('abcd@abc.com');//Or*/ await page.fill('#email','abcd@abc.com')
    
    /*await page.locator('#address').fill('Abcd efg hijk lmno pqrs tuv 123');//Or */ await page.fill('#address','Abcd efg hijk lmno pqrs tuv 123')
    
    /*await page.locator('#password').fill('Pass1234');//Or */ await page.fill('#password','Pass1234')

    await page.locator('.btn.btn-primary').click();

})

test('Validate Input Box Error Messege', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
     await page.locator("#headingOne .accordion-button.collapsed").click();
    await page.getByText(' Text Box').click();
    await expect(page).toHaveTitle('Selenium Practice - Text Box');
    await expect(page.locator("#TextForm h1")).toHaveText("Text Box");

     await page.locator('.btn.btn-primary').click();

     await expect(page.locator('#fullname-error')).toBeAttached();
    //Extract Text
     const ErrorLabel = page.locator('#fullname-error')
     const ExtractText = await ErrorLabel.textContent();
     console.log(ExtractText);

     await expect(ExtractText).toContain('This field is required.')


})