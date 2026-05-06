const{test, expect}=require('@playwright/test')
test("dyanmicnetwork", async function({page}){

await page.goto("https://freelance-learn-automation.vercel.app/login")
await page.locator("//a[@href='/signup']").click()
await page.waitForLoadState("networkidle")//Basically use for dynamic network loading
const count=await page.locator("//input[@type='checkbox']").count()
await expect(count).toBe(8)
await page.waitForTimeout(5000)





})