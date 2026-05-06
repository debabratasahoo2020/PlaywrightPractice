const {test,except}=require('@playwright/test')

test("MouseHover", async function({page})
{
 await page.goto("https://freelance-learn-automation.vercel.app/login")

 await page.getByPlaceholder("Enter Email").fill("admin@email.com",{delay:200})
 await page.getByPlaceholder("Enter Password").fill("admin@123",{delay:200})
 await page.getByRole("button",{name:"Sign in"}).click()
 await page.locator("//span[text()='Manage']").hover()


})