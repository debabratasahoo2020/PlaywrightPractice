const{expect}=require('@playwright/test')
class homepage
{
    constructor(page)
    {
        this.page=page
        this.manageoption="//span[text()='Manage']"
        this.menu="//img[@alt='menu']"
        this.logout="//button[text()='Sign out']" 

    }

    async logOutFromApplication()
    {

        await this.page.click(this.menu)
        await this.page.click(this.logout)
    }

    async VerifyHomePage()
    {
        await expect(this.page.locator(this.manageoption)).toBeVisible()
    }
}
module.exports=homepage