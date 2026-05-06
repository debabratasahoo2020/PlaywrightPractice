const{test,expect}=require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../tests/testdata2.json")))

test.describe("Data Driven Test",function(){

for(const data of testdata)
    {
       test.describe(`Login with user ${data.id}`,function()
       {

           test('login', async function({page})
           {
           await page.goto("https://freelance-learn-automation.vercel.app/login")
           await page.locator("#email1").fill(data.username)
           await page.waitForTimeout(5000)


           })

       })

    }

})