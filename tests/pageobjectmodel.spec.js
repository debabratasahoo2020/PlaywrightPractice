const {test,expect}=require('@playwright/test')
const LoginPage=require("../pages/login");
const HomePage=require("../pages/homepage")

test("pageobjectmodel",async function({page})
    {

await page.goto("https://freelance-learn-automation.vercel.app/login")
const loginpage=new LoginPage(page)
await loginpage.loginToApplication("admin@email.com","admin@123")

const homepage=new HomePage(page)
homepage.VerifyHomePage()
await homepage.logOutFromApplication()
loginpage.verifyLoginPage()



});