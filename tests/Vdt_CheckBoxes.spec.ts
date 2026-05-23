import{test, expect} from '@playwright/test'

test('Validate Check Boxes', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/check-box.php');

    await page.locator('.plus').first().click();

    await expect(page.locator("#c_bs_1")).not.toBeChecked();
    await expect(page.locator("#c_bf_1")).not.toBeChecked();
    await expect(page.locator("#c_bf_2")).not.toBeChecked();

    //Clicking main cb sub cb clicks
    await page.locator("#c_bs_1").check();
    await expect(page.locator("#c_bf_1")).toBeChecked();
    await expect(page.locator("#c_bf_2")).toBeChecked();

    //clicking sub cb uncheck main cb will uncheck
    await page.locator("#c_bf_1").uncheck();
    await expect(page.locator("#c_bs_1")).not.toBeChecked();

    //clicking all cb checks main also check
    await page.locator("#c_bf_1").check();
    await page.locator("#c_bf_2").check();
    await expect(page.locator("#c_bs_1")).toBeChecked();

})

test.only('Vdt CB in amazon', async({page})=>{
    await page.goto("https://www.amazon.in/")

    await page.getByPlaceholder("Search Amazon.in").fill("Books");
    await page.locator("#nav-search-submit-button").click();

    await page.waitForSelector("h2.a-size-base span.a-text-bold");
    await expect(page.locator("h2.a-size-base span.a-text-bold")).toContainText(/Books/i); //RegEx-->(/Books/i)

    await page.locator("//span[text()='Hardcover']").click();

    const HardcoverElements = await page.locator("div[data-cy='price-recipe'] a.a-text-bold").all();

    for(const Elements of HardcoverElements)
    {
        await expect(Elements).toContainText("Hardcover");
    }



})

