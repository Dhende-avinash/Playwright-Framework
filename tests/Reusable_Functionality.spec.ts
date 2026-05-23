import {test, expect, Page}from '@playwright/test';

async function login(page: Page) {
          await page.goto('https://www.saucedemo.com/');
          await page.locator("#user-name").fill("standard_user");
          await page.locator("#password").fill("secret_sauce");
          await page.locator("#login-button").click();
    
}
test.describe("Login Functionality",()=>
{
     test('-Valid Credentials:- Organized or Grouped T C using Descibe block',async({page})=>
        {
            await login(page);

            await page.waitForSelector(".title");
            await expect(page.locator(".title")).toHaveText("Products");/*.tpHavetext():- For complete text search*/
        })
    test('-Inalid Credentials:-',async({page})=>
        {
           await login(page);

            await page.waitForSelector(".error-message-container");
            await expect(page.locator(".error-message-container")).toContainText("password do not match");
                                                            /*.toCantainText():- Partial Text Match*/
        })
    
})
                            //()=>ananymous function
test.describe('Products Page',()=>{
    test('Add product',async({page})=>{
            await login(page);

            await page.waitForSelector(".title");
            await expect(page.locator(".title")).toHaveText("Products");
            await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();

            })

})
test.describe('Cart page Functionality',()=>{
   
       test("add product",async({page})=>
        {
        await login(page);

        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Products");
        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        await page.locator(".shopping_cart_link").click();
        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Your Cart");
     })
       
        test("Validate checkout",async({page})=>{
        await login(page);

        await page.waitForSelector(".title");
        await expect(page.locator(".title")).toHaveText("Products");
        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        await page.locator(".shopping_cart_link").click();
        await page.waitForSelector("#checkout");
        await expect(page.locator("#checkout")).toHaveText("Checkout");

    })
})