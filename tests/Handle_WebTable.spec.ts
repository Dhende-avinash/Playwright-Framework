import{test, expect} from '@playwright/test'

test.skip('Handle WebTable',async({page})=>{

   await page.goto("https://letcode.in/table");

   await expect(page.locator("#shoppiing")).toBeVisible; //tobevisible is expect method

   //Number Of row
   const row = await page.locator("#shopping tbody tr").count();
   console.log(`The number of rows in the table :${row}`);
   await expect(row).toBe(4)

   //number of Column
   const column = await page.locator("#shopping thead tr th").count();
   console.log(`The number of Column in the table :${column}`);
   expect(column).toBe(2);

   //Perticular iteam
   const apple = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(1)").textContent();
   console.log(`Iteam Name is: ${apple}`);
    expect(apple).toBe('Apple');

   const applePrize = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(2)").textContent();
   console.log(`Apple prize is: ${applePrize}`);
    expect(applePrize).toBe("180");

   //Validate column name
   const cname = ['Items','Price'];
   const colTextName = await page.locator("#shopping thead tr th").allTextContents();
   console.log(`Column Name is: ${colTextName}`);
    expect(colTextName).toEqual(cname);
  
})

test.skip('Handle CheckBox in WebTable',async({page})=>{
    
   await page.goto("https://letcode.in/table");
    expect(page.locator("#simpletable")).toBeVisible;

    //Filtering Option
 /*   const names ='Koushik';
    const row = page.locator("#simpletable tbody tr").filter({hasText: names});
    row.locator("input[type='checkbox']").check();
    await expect(row.locator("input[type='checkbox']")).toBeChecked();
*/
    // for multiple checkbox click
    const names=['Koushik','Yashwanth','Iron'];
    for(const name of names)
    {
        const row = page.locator("#simpletable tbody tr").filter({hasText: name});
        await row.locator("input[type='checkbox']").check();
    }
      for(const name of names) //here we use assertion
    {
        const row = page.locator("#simpletable tbody tr").filter({hasText: name});
        await expect(row.locator("input[type='checkbox']")).toBeChecked();
    }

    await page.waitForTimeout(5000);

})

test('Handle WebTable By clicking On it',async({page})=>{
    await page.goto("https://letcode.in/table");
    expect(page.locator(".is-hoverable.is-fullwidth")).toBeVisible;

    const calorie = await page.locator(".is-hoverable.is-fullwidth tr td:nth-of-type(2)").allTextContents();
    console.log(calorie);
           
    //calorie.join():-array converted in string
    //[...calorie].sort().join():- Array directly copied or duplicate & sorted
    //===:- Strict equal to
    const isSorted = calorie.join()===[...calorie].sort().join();
    console.log(isSorted);
    expect(isSorted).toBe(true);

    await page.waitForTimeout(5000);
})