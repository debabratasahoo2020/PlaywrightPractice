const {test,expect}=require('@playwright/test')

test("Dropdown",async function({page})
{

await page.goto("https://freelance-learn-automation.vercel.app/signup")

await page.locator("#state").selectOption({label:"Goa"})
await page.waitForTimeout(2000)

await page.locator("#state").selectOption({value:"Andhra Pradesh"})
await page.waitForTimeout(2000)

await page.locator("#state").selectOption({index:2})
await page.waitForTimeout(2000)

//Recording Values from dropdown
//const value=await page.locator("#state").textContent()
//console.log(value)
//await expect(value.includes("Kerala")).toBeTruthy

//Record dropdown values using For loop
let state=await page.$("#state")
let allElements=await state.$$("option")

let ddStatus=false

for(let i=0;i<allElements.length;i++){
    let element=await allElements[i]
    let value=await element.textContent()

    if(value.includes("Goa")){

        ddStatus=true
        break
    }
}
await expect(ddStatus).toBeTruthy()

//Multi select Dropdown

await page.locator("#hobbies").selectOption(['Playing','Reading'])
await page.waitForTimeout(3000)

})

