import{test, expect}from'@playwright/test'

test.skip('Type, Enter, Backspace, salect word',async({page})=>{
    await page.goto("https://www.amazon.in/");

    await page.getByPlaceholder("Search Amazon.in").focus();
    await page.keyboard.type("Laptop");
    //await page.keyboard.press('Enter');
    //await page.keyboard.press('Backspace'); // erase single char ex.lapto
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');

    await page.waitForTimeout(5000);

})

test.skip('Copy paste',async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");

    await page.locator("#name").focus();
    await page.keyboard.type("Script and Excute");
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Control+C')
    await page.waitForTimeout(3000);
    await page.locator("#email").focus();
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);
})

test('Use Shift Key',async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#name").focus();

    await page.keyboard.down('Shift');
    await page.keyboard.press('KeyD');
    await page.keyboard.up('Shift')
     await page.waitForTimeout(3000);
})

