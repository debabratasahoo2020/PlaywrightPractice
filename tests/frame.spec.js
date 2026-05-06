const {test,except}=require('@playwright/test')
test("Frame", async function({page}){

await page.goto("http://docs.oracle.com/javase/8/docs/api/")
const iframe=await page.frameLocator("//frame[@name='packageListFrame']")
await iframe.locator("//a[text()='java.applet']").click()
//await page.pause()
await page.waitForTimeout(5000)





})