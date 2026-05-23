import{test, expect} from '@playwright/test';

// Before Run This Code comment Line No. 7 to 24

test.skip('Vdt STANDARD DropDown', async({page})=>{
    await page.goto('https://www.amazon.in/');
/*
    await page.locator("#searchDropdownBox").selectOption("Alexa Skills"); // by using value.
                            //or
    await page.locator("#searchDropdownBox").selectOption("search-alias=fashion"); // By using option tag->value attributes value
                            //or
    await page.locator("#searchDropdownBox").selectOption({label: 'Amazon Fresh Meat'}); //By using label or visible text.
                            //or
    await page.locator("#searchDropdownBox").selectOption({index: 9}); // By using index
                            //or
    await page.selectOption("#searchDropdownBox",{label: 'Audible Audiobooks'});// direct use, will take 2 parameters.

    const selectOption1 = await page.locator("#searchDropdownBox").inputValue();
    expect(selectOption1).toBe("search-alias=audible");// Validation For Audible Audiobook above line also
    //give value attributes value for .inputvalue() method in abve line

    const selectOption2 = await page.locator("#searchDropdownBox option:checked").textContent();
    expect(selectOption2).toBe("Audible Audiobooks");
*/
    const selectOption3 = await page.locator("#searchDropdownBox option:checked").textContent();
    expect(selectOption3).toBe("All Categories"); //Vdt Default selection--> All Categories

    const selectOption4 = await page.locator("#searchDropdownBox option").count();
    console.log(selectOption4);//get total count

    expect(selectOption4).toBe(46);// Vdt Count

})

test.skip('Vdt COUSTOM Drop Down', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(3000);
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("button[type='submit']").click();

    await expect(page.locator(".oxd-text.oxd-text--h6")).toBeVisible();

    await page.locator(".oxd-userdropdown-tab").click();

    await page.locator("[role='menuitem']", {hasText:'Support'}).click();// Filtering Option In PW.

    await expect(page.locator(".orangehrm-sub-title")).toHaveText("Customer Support");
    
    await page.locator(".oxd-main-menu-item--name", {hasText:'Leave'}).click();

    //await page.locator(".oxd-select-text--active").nth(0).click(); 
                            // OR
    await page.waitForSelector("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[1]");
    await page.locator("(//div[@class='oxd-select-text-input'][normalize-space()='-- Select --'])[1]").click();// normalize space method

    await page.locator(".oxd-select-option",{hasText: 'Cancelled'}).click();

    await page.waitForSelector(".oxd-multiselect-chips-selected");
    await page.waitForTimeout(3000);
    await expect(page.locator(".oxd-multiselect-chips-selected",{hasText:'Cancelled'})).toBeVisible();
                //Or
    //await expect(page.locator(".oxd-multiselect-chips-selected")).toContainText('Cancelled');

})

test('Seachable Drop Down', async({page})=>{
    await page.goto("https://www.amazon.in/");

    await page.locator("#twotabsearchtextbox").fill("Books");

    await page.waitForSelector("#nav-flyout-searchAjax")
    await expect(page.locator("#nav-flyout-searchAjax")).toBeVisible();

    const ListOfOptions = await page.locator("[id*='sac-suggestion-row-']").count();//count-->to get number of list 
    console.log(ListOfOptions);

    await expect(page.locator("[id*='sac-suggestion-row-']")).toHaveCount(20);

    const AllTextcontet = await page.locator("[id*='sac-suggestion-row-']").allTextContents(); // to get or print more than 1 text content
                                                                        //.TextContent()--> for single text print               
    console.log(AllTextcontet);

    // check perticular product in list, hastext()--> use Filtering
    await expect(page.locator("[id*='sac-suggestion-row-']",{hasText:'books cover'}).first()).toBeVisible();

    // click product in list that we know. this is stright forward.
    //page.locator("[id*='sac-suggestion-row-']",{hasText:'books cover'}).first().click(); // commented becuse avoide colison between two action
    
    // click product in list by Loop
    const suggestions = page.locator("[id*='sac-suggestion-row-']");
    const count = await suggestions.count();

    for (let i = 0; i < count; i++) 
        {
            const text1 = await suggestions.nth(i).textContent();
            if (text1 && text1.includes("books for 3 year old"))
                { await suggestions.nth(i).click();
                    break;
                }
        }
                    //Or
/*
        const options = await page.locator("[id*='sac-suggestion-row-']").all();
        for(const option of options)
        {
            const text = await option.textContent();
            if(text && text.includes("bookshelf for home"))
            {
                await option.click();
                break;
            }
        }
 */           
        await page.waitForTimeout(5000);
    await page.close();


})
