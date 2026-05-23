import {test, expect} from '@playwright/test'
import { Login } from './SauceDemoPageClasses/LogInPage'
import { Products } from './SauceDemoPageClasses/Products'
import { CheckOutPage } from './SauceDemoPageClasses/CheckOutPage'

test("User Should be Able To Loging", async({page})=>{
    const login = new Login(page)/*By using new Keyword we create object*/
    const product = new Products(page);
    const Cart = new CheckOutPage(page);


    await login.navigate("https://www.saucedemo.com/");
    await login.waitForPageLoad();
    await login.LoinToSauceDemo("standard_user","secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    const isProduct = await product.isProductFieldVisible();
    expect(isProduct).toBeTruthy();

    const isLogo = await product.isLogoPresent();
    expect(isLogo).toBeTruthy();

    await product.validateProductDetails();
    await product.addToCartByName("Sauce Labs Backpack");

    await product.clickOnCheckOutButton();
    const productName = await Cart.getProductNameInCart();
    expect(productName).toBe("Sauce Labs Backpack");

})