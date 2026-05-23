/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/ 

import{test, expect, Locator} from "@playwright/test";

test.use({ 
    // Use a common desktop user agent string
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36'
});

test("Verify Playwright Locators",async({page})=>{

    await page.goto("https://demo.nopcommerce.com/", { waitUntil: 'domcontentloaded' });
   
    //1)page.getByAltText() to locate an element, usually image, by its text alternative.
    const logo:Locator = page.getByAltText("nopCommerce demo store");// return locator is also fixture no need await
    await expect(logo).toBeVisible(); //return promice

    //2)page.getByText(): to locate by visible inner text content.
    //used with non interactive elements like div, span, p etc
    //use get by role locator for interactive element like button, a, input etc
    
    //const text:Locator=page.getByText("Welcome to our store");
                        //or
    await expect(page.getByText("Welcome to our store")).toBeVisible();// support full string, sub string, reg exp
    await expect(page.getByText(/Welcome\s+To\s+Our\s+Store/i)).toBeVisible(); // Reg Exp: i represent case insensitive.

    /*3)page.getByRole(): to locate by explicit and implicit accessibility attributes.
        role is not an attribute. sometime it may also
        includes interactive elements buttons, checkbox, heading, links, tables and follow w3c specification for aria role.
        implicite means the tag name and role exatly same
    */
       await page.getByRole("link", {name:'Register'}).click();//<--for click on link
        
       //await page.waitForURL('**/register', { timeout: 30000, waitUntil: 'domcontentloaded' });

       //await page.waitForTimeout(1000);
       await expect(page.getByRole("heading",{name:'Register', exact:true})).toBeVisible();
       //await expect(page.getByRole("heading", { name: /register/i, exact: true })).toBeVisible();
       //await expect(page.getByRole("heading", { name: 'Your Personal Details' })).toBeVisible();

       //4)page.getByLabel(): to locate a form control by associated label's text.
       //labels seen in only one in forms. ex first name, last name
       // page.getByLabel('First name:').fill("john"); //type method depricated
        //page.getByLabel('Last name: ').fill("kennedy");
        //page.getByLabel('Email:').fill("john@123");



})