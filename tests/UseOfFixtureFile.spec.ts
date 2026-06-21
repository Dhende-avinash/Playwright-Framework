import { test, expect } from "../Fixtures/auth.fixture";

test("Custom Fixture", async({loggedInUser})=>{

    await loggedInUser.click("#add-to-cart-sauce-labs-backpack");
    await loggedInUser.click("#shopping_cart_container");
})