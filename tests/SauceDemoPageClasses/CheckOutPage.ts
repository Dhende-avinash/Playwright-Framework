import{test, Page}from '@playwright/test'
import { BasePage } from './BasePage'

export class CheckOutPage extends BasePage
{
    constructor(page:Page)
    {
        super(page);
    }
    private itemName = ".inventory_item_name";

    async getProductNameInCart():Promise<String>
    {
        return(await this.page.locator(this.itemName).textContent())?.trim()||'';
    }
}
