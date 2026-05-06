const{test,expect}=require('@playwright/test')
const { promises } = require('node:dns')
test("Multi Window", async function({browser}){

const context=await browser.newContext()
const page=await context.newPage()
await page.goto("https://freelance-learn-automation.vercel.app/login")

const [newpage]=await Promise.all
(
    [
      context.waitForEvent("page"),
      await page.locator("(//a[contains(@href,'facebook')])[1]").click()
    ]
)

await newpage.waitForTimeout(3000)
await newpage.locator("(//input[@name='email'])[2]").fill("a@gmail.com")

await newpage.close()

await page.locator("#email1").fill("b@gmail.com")
await page.waitForTimeout(3000)


})