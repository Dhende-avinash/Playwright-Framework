import { test, expect } from '@playwright/test';

test.skip('Mouse Click', async ({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");

    await expect(page.locator("span#click_type")).not.toBeVisible();
    await page.locator("div #click_area").click();
    //or
    await page.click("div #click_area");
    await expect(page.locator("span#click_type")).toHaveText("Click");

})

test.skip('Mouse Right Click', async ({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    
    await page.locator("div #click_area").click({button:'right'});
    //Or
    await page.click("div #click_area",{button:'right'});
    await expect(page.locator("span#click_type")).toHaveText("Right-Click");
    await page.waitForTimeout(5000);

})

test.skip('Mouse Double click', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    
    await page.locator("div #click_area").dblclick;
    //Or
    await page.dblclick("div #click_area");
    await expect(page.locator("span#click_type")).toHaveText("Double-Click");
    
})
test.skip('Mouse Hover and click', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");

    await page.locator("button.dropbtn").hover();
    //Or
    await page.hover("button.dropbtn");

    await page.locator("text='Java'").click();

    await expect(page.locator("h4#hover_validate")).toHaveText("Java");

})
test.skip('Drag and Drop', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");

    await page.dragAndDrop("#drag_source","#drop_target");
    await expect(page.locator(".text-light.shadow")).toHaveText("Drop is successful!");

    await page.reload();
                //Or
    await page.locator("#drag_source").dragTo(page.locator("#drop_target"));
    await expect(page.locator(".text-light.shadow")).toHaveText("Drop is successful!");

})
test('Scroll Down', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");

    await page.mouse.wheel(0,400);

    await page.waitForTimeout(5000);
})