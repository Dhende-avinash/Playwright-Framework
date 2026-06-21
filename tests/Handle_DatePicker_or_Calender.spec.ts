import{test,expect}from'@playwright/test'
/*to Run This Tests Make Sure for All Tests use skip and run only one test */
test('Handle Simple Date picker',async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    
    await page.locator("#dob").fill("2025-05-13");

    expect(page.locator("#dob")).toHaveValue("2025-05-13");

    await page.waitForTimeout(5000);

})

test('Playwright Simple Date picker',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/datepicker/");

   const frame = page.frameLocator("(//iframe[@class='demo-frame'])[1]");
   await frame.locator("#datepicker").first().click();
  
   await frame.locator("//a[text()='12']").click();
   await expect(frame.locator("#datepicker")).toHaveValue("04/12/2026")
   
   await page.waitForTimeout(5000);

})

test('Current Date picker',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/datepicker/");

   const frame = page.frameLocator("(//iframe[@class='demo-frame'])[1]");
   await frame.locator("#datepicker").first().click();

   const date = new Date();
   console.log(date);

   const todayDate = date.getDate();
   console.log(todayDate);

   // select cuurent date in Above webCalender
   await frame.locator(`text="${todayDate}"`).click();

   const MainCalende = new Date();
   const cureentDate = MainCalende.getDate();
   console.log(cureentDate);
   const currentMonth = MainCalende.getMonth()+1;
   console.log(currentMonth);
   const currentYear = MainCalende.getFullYear();
   console.log(currentYear);

   const DateFormate = `${currentMonth}/${cureentDate}/${currentYear}`;
   console.log(DateFormate);

   const datePickerValue = await frame.locator("#datepicker").inputValue();
   console.log(datePickerValue);

   // Validate sys time with Web Time
   const expectedDate = new Date(DateFormate);
   const ActualDate= new Date(datePickerValue);
   expect(ActualDate.getTime()).toBe(expectedDate.getTime());
                    //.getTime():- it asigns the unique number to each date
  
   await page.waitForTimeout(5000);

})

test('Select date, month, year based on user i/p',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
    const frame = page.frameLocator("(//iframe[@class='demo-frame'])[1]");
    await frame.locator("#datepicker").first().click();

    const targetYear = 2096
    const targetMonth ="May"
    const targetDay = "22"

    while(true)   //while has infinite loops until the meet conditions
    {
        const displayedyeartext = await frame.locator(".ui-datepicker-year").textContent()||"0"; //||:-logical OR operator
        console.log(displayedyeartext);
        const displayedYear = parseInt(displayedyeartext);
        console.log(displayedYear)

        if(displayedYear===targetYear)
        {
            break;
        }
        if(displayedYear<targetYear)
        {
            await frame.locator(".ui-icon-circle-triangle-e").click();
        }
        else
        {
            await frame.locator(".ui-icon-circle-triangle-w").click();
        }

    }
     while(true)   //while has infinite loops until the meet conditions
    {
        const displayedMonth= await frame.locator(".ui-datepicker-month").textContent()||"0"; //||:-logical OR operator
       
        if(displayedMonth===targetMonth)
        {
            break;
        }
        else
        {
            await frame.locator(".ui-icon-circle-triangle-e").click();
        }

    }
    await frame.locator(`text="${targetDay}"`).click();

    await page.waitForTimeout(5000);

})


test('Select date, month, year simply', async ({ page }) => {
    await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
    
    const frame = page.frameLocator("//iframe[@class='demo-frame']").first();
    
    // 1. Turn on the Month/Year standard dropdowns inside the calendar widget via JavaScript
    await frame.locator("#datepicker").evaluate((el) => {
    // Cast window to 'any' so TypeScript stops checking its properties
    (window as any).$(el).datepicker("option", { changeMonth: true, changeYear: true });
    });

    // 2. Click the input field to open the calendar
    await frame.locator("#datepicker").click();

    // 3. Select the Year and Month directly from the newly visible dropdowns
    await frame.locator(".ui-datepicker-year").selectOption("2096");
    await frame.locator(".ui-datepicker-month").selectOption({ label: "May" }); // Select by text label

    // 4. Click the exact day
    await frame.locator(".ui-datepicker-calendar td a", { hasText: /^22$/ }).click();

    // Verification
    const selectedValue = await frame.locator("#datepicker").inputValue();
    expect(selectedValue).toBe("05/22/2096");
});
