import{test, expect} from '@playwright/test'

test('Validate Input Boxes', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');

    await page.locator("#headingOne .accordion-button.collapsed").click();
    await page.getByText(' Radio Button').click();

    await expect(page).toHaveTitle('Selenium Practice - Radio Button');

    //vdt Radio Button text On page
    await expect(page.locator('form h1')).toHaveText("Radio Button");

    //vdt Radio Button Unchecked on page
    await expect(page.locator("input[value='igottwo']")).not.toBeChecked();
    await expect(page.locator("input[value='igotthree']")).not.toBeChecked();
    await expect(page.locator("input[value='option3']")).toBeDisabled();

    //vdt Buttons By Clicking
    await page.locator("input[value='igottwo']").check();
    await expect(page.locator("input[value='igottwo']")).toBeChecked();
    await expect(page.locator("#check.hide")).toHaveText(" You have checked Yes");

    await page.locator("input[value='igotthree']").check();
    await expect(page.locator("input[value='igotthree']")).toBeChecked();
    await expect(page.locator("#check1.hide")).toHaveText("You have checked Impressive");

    //vdt after clicking button previous messeg not shown
    await expect(page.locator("#check.hide")).not.toBeVisible();



    
    
   

})

