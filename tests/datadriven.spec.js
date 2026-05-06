const{test, expect}=require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../tests/testdata.json")))
test("datadriven", async function({page}){

await page.goto("https://freelance-learn-automation.vercel.app/login")



//await page.locator("#email1").fill(testdata.username)
//await page.locator("#email1").fill(testdata.key2[2])//array
await page.locator("#email1").fill(testdata.key3.subkey2)//object inside object
await page.waitForTimeout(5000)






})