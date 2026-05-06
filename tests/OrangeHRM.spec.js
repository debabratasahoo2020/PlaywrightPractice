const {test, except}= require("@playwright/test")

test.use({viewport:{width:1500,height:1000}})


test("valid Login", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)
console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").fill("Admin",{delay:200})
    await page.getByPlaceholder("Password").fill("admin1234",{delay:200})
    await page.locator("//button[@type='submit']").click()

    
    await page.getByAltText("profile picture").first().click()
    await page.getByText("Logout").click()

})