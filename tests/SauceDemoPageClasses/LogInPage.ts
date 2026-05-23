import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class Login extends BasePage
{
    constructor(page:Page)
    {
        /*when the child class has constructor it must 
        call the parent class constructor using super keyword*/
        super(page);
    }

    private useNameField = "#user-name";
    private passwordField= "#password";
    private LoginButton = "#login-button";

    async LoinToSauceDemo(userName:string,password:string)
    {
        await this.page.fill(this.useNameField, userName);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.LoginButton);
    }
}