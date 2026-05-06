const {test,expect}=require('@playwright/test')
test("Autosuggestion",async function({page}){

await page.goto("https://www.google.com/")
await page.locator("textarea[name='q']").fill("Mukesh Otwani ")
await page.waitForSelector("//li[@data-entityid='autocomplete_user_feedback_kp_id']")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("ArrowDown")
await page.keyboard.press("Enter")
await page.waitForTimeout(3000)
}) 

test.only("Autosuggestion2",async function({page}){

await page.goto("https://www.google.com/")
await page.locator("textarea[name='q']").fill("Mukesh Otwani ")
await page.waitForSelector("//li[@data-entityid='autocomplete_user_feedback_kp_id']")
 
let allElements=await page.$$("//li[@data-entityid='autocomplete_user_feedback_kp_id']")
for(let i=0;i<allElements.length;i++)
{
    let element=await allElements[i].textContent()
    if(element.includes("github")){

    await allElements[i].click() 
   
    break 

    }
      
}
}) 