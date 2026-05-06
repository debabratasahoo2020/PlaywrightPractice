const{test,expect}=require('@playwright/test')
test("Alert", async function({page}){

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on('dialog', async (allert)=>{
expect(allert.type()).toContain("alert")
expect(allert.message()).toContain("I am a JS Alert")
await allert.accept()


})
await page.locator("//button[text()='Click for JS Alert']").click()
})

test("Confirm", async function({page}){

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on('dialog', async (confirm)=>{
expect(confirm.type()).toContain("confirm")
expect(confirm.message()).toContain("I am a JS Confirm")
await confirm.accept() //For Accept
//await confirm.dismiss() //for Reject
await page.locator("//button[text()='Click for JS Confirm']").click()
})

await page.locator("//button[text()='Click for JS Confirm']").click()

})

test.only("Prompt", async function({page}){

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

page.on('dialog', async (prompt)=>{
expect(prompt.type()).toContain("prompt")
expect(prompt.message()).toContain("I am a JS prompt")
await prompt.accept("Deva") //For Accept
//await prompt.dismiss() //for Reject

})

await page.locator("//button[text()='Click for JS Prompt']").click()
await page.waitForTimeout(5000)
})