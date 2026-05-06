const { test,expect } = require("@playwright/test")

test("Error Message", async function({page}){
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


    await page.getByPlaceholder("Username").type("Admin")
    await page.getByPlaceholder("Password").type("admin1")
    await page.locator("//button[@type='submit']").click()

    const errormessage=await page.locator("//p[contains(@class,'oxd-text oxd-text--p oxd-alert-content-text')]").textContent();
    //await expect (errormessage.includes("Invalid")).toBeTruthy();
    await expect(errormessage==="Invalid credentials").toBeTruthy();

})



