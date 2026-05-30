import { test, expect } from '@playwright/test'
import { createUser } from '../../factories/user.factory'

test("Fill User Details on Automatin Excercize web", async ({ page }) => {

    const user = createUser();

    await page.goto("https://automationexercise.com/signup");

    await page.getByPlaceholder("Name").fill(user.fullName);
    await page.locator("//input[@data-qa='signup-email']").fill(user.email);
    await page.locator("//button[normalize-space()='Signup']").click();

    await page.check("#id_gender1");

    await page.fill("#password", user.password);

    await page.selectOption("#days", user.day);
    await page.selectOption("#months", user.month);
    await page.selectOption("#years", user.year.toString());

    await page.check("#newsletter");
    await page.check("#optin");

    console.log("Filling First Name");
    await page.fill("#first_name", user.firstName);

    console.log("Filling Last Name");
    await page.fill("#last_name", user.lastName);

    console.log("Filling Company");
    await page.fill("#company", user.company);
    await page.fill("#address1", user.address1);
    await page.fill("#address2", user.address2);

    console.log("Filling State");
    //await page.fill("//input[@id='state']", user.state);
    await page.locator("#state").fill(user.state);

    console.log("Filling City");
    //await page.fill("//input[@id='city']", user.city);
    await page.locator("#city").fill(user.city);

    await page.fill("#zipcode", user.zipCode);
    await page.fill("#mobile_number", user.mobileNumber);

    console.log("Clicking Create Account");
    await page.locator("//button[normalize-space()='Create Account']").click();

    await page.waitForTimeout(5000);
    console.log("Waiting for Account Created");
    await expect(page.locator("//h2[normalize-space()='Account Created!']")).toBeVisible();












})