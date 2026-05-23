import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Products extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    private productText = ".title";
    private logo = ".app_logo";

    /*
    private productList = ".inventory_item_name ";//if both element same locator value then dont chaining it in loop
    private productTitle = "div[class='inventory_item_name ']";
    private productDescription = ".inventory_item_desc";
    private productPrice = ".inventory_item_price";
    private AddToCartButton = ".btn_small.btn_inventory";
    */

    private productList = ".inventory_item";
    private productTitle = ".inventory_item_name";
    private productDescription = ".inventory_item_desc";
    private productPrice = ".inventory_item_price";
    private AddToCartButton = ".btn_small.btn_inventory";
    private CheckOutButton = ".shopping_cart_link";

    /*promice-it return promise to async & they do not return boolean result immediately it give later
    ,boolean-return True or False*/
    async isProductFieldVisible(): Promise<boolean> {
        return await this.page.locator(this.productText).isVisible();

    }

    async isLogoPresent(): Promise<boolean> {
        return await this.page.locator(this.logo).isVisible();
    }

    async validateProductDetails() {

        //Option--1

        /* const product = await this.page.locator(this.productList).count();
 
         console.log(`Total products found : ${product}`);
 
         for (let i = 0; i < product; i++) {
 
             const productItem = this.page.locator(this.productList).nth(i);
 
             const title = await productItem.locator(this.productTitle).innerText();
             console.log(`Product ${i + 1} Title: ${title}`);
 
             const description = await productItem.locator(this.productDescription).innerText();
             console.log(`Product ${i + 1} Description: ${description}`);
 
             const price = await productItem.locator(this.productPrice).innerText();
             console.log(`Product ${i + 1} Price: ${price}`);
 
             const addToCartBtn = await productItem.locator(this.AddToCartButton).innerText();
             console.log(`Product ${i + 1} Button: ${addToCartBtn}`);
         }
        
         */  //Option--2
        /*            
               const products = this.page.locator(this.productList);
               const count = await products.count();
       
               console.log(`Total products found: ${count}`);
       
               for (let i = 0; i < count; i++) {
       
                   const product = products.nth(i);
       
                   const title = await product.locator(this.productTitle).innerText();
                   const description = await product.locator(this.productDescription).innerText();
                   const price = await product.locator(this.productPrice).innerText();
                   const button = await product.locator(this.AddToCartButton).innerText();
       
                   console.log(`\nProduct ${i + 1}:`);
                   console.log(`Title: ${title}`);
                   console.log(`Description: ${description}`);
                   console.log(`Price: ${price}`);
                   console.log(`Button: ${button}`);
               }
       */ // Option--3 Sore Data in Array. 
        /*--structured data
          --reusable for assertions
          --useful for reports
          --API-like response format*/
        const products = this.page.locator(this.productList);
        const count = await products.count();

        const productData: any[] = [];

        for (let i = 0; i < count; i++) {

            const product = products.nth(i);

            const title = await product.locator(this.productTitle).innerText();
            const description = await product.locator(this.productDescription).innerText();
            const price = await product.locator(this.productPrice).innerText();
            const button = await product.locator(this.AddToCartButton).innerText();

            // store in array
            productData.push({
                productNo: i + 1,
                title: title.trim(),
                description: description.trim(),
                price: price.trim(),
                button: button.trim()
            });
        }

        console.log("Final Product Data:", productData);

        return productData;
    }

    async addToCartByName(targetProductName:string)
    {
        const productNamecount = await this.page.locator(this.productList).count();
        console.log(`Total Product Count : ${productNamecount}`);

        for(let i =0; i<productNamecount; i++)
        {
            const product = this.page.locator(this.productList).nth(i);
            const name = await product.locator(this.productTitle).textContent();
            console.log(name);
            if(name?.trim()===targetProductName)
            {
                await product.locator(this.AddToCartButton).click();
                console.log(`Product ${targetProductName} is added to Cart.`);
                return;//--exit loop after finding and adding to cart
            }
        }
        throw new Error(`Product ${targetProductName} is not Found in Page.`);

    }

    async clickOnCheckOutButton()
    {
        await this.page.locator(this.CheckOutButton).click();

    }

}
