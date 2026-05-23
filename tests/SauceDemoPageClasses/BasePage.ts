import { Page} from "@playwright/test";

//export- child class access the parent class method and properties
export class BasePage
{
    //only BasePage and inherited pages allow access 
    protected page : Page;

    //constructor-it run automatically when we create object for the class
    constructor(page:Page)
    {
        this.page=page
    }

    async navigate(url:string)
    {
        await this.page.goto(url);
    }

    async waitForPageLoad()
    {
        await this.page.waitForLoadState('load');
    }

}