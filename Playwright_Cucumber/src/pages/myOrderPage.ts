import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class MyOrderPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private MyOrderPageElements={
        accContinue:'//*[@id="content"]/div/a',
        myAccount:"//a[@class='icon-left both nav-link dropdown-toggle' and @href='https://ecommerce-playground.lambdatest.io/index.php?route=account/account']",
        acc:'#widget-navbar-217834 > ul > li:nth-child(6) > a',
        viewOrderButton:"//a[contains(@href, 'order/info') and contains(@class, 'btn-info')]",
        orderhistory:'#column-right > div > a:nth-child(7)',
       eyeIcon:"#content > div.table-responsive > table > tbody > tr:nth-child(1) > td:nth-child(7) > a",
       reorderbtn:"#content > div.table-responsive > table > tbody > tr > td:nth-child(6) > a.btn.btn-primary",
    //    reordersuccessmsg:"//*[@id='account-order']/div[1]/text()[1]"
       reordersuccessmsg: "//div[contains(@class,'alert-success') and contains(text(),'Success: You have added')]"

    }

    async clickOnContinue1():Promise<void>{
        return this.base.waitAndClick(this.MyOrderPageElements.accContinue);
    }
    
    async clickOnMyAccount():Promise<void>{
        //this acc is clicked even before confirm order is clicked.so wait for url to change to https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success
        await this.page.waitForURL("**/index.php?route=checkout/success");
        return this.base.waitAndClick(this.MyOrderPageElements.acc);

    }
    
    async clickOnViewOrderButton():Promise<void>{
        return this.base.waitAndClick(this.MyOrderPageElements.orderhistory);
    }

    async viewHistoryDisplayed(){
        return expect(this.page.locator(this.MyOrderPageElements.eyeIcon)).toBeVisible();
    }
    async clickOnViewbutton():Promise<void>{
        return this.base.waitAndClick(this.MyOrderPageElements.viewOrderButton);
    }
    async clickOnReorderButton():Promise<void>{
        return this.base.waitAndClick(this.MyOrderPageElements.reorderbtn);
    }

    async reorderSuccessMessage(){
        const message = await this.page.locator(this.MyOrderPageElements.reordersuccessmsg).textContent();
        expect(message).toContain(" Success: You have added ");
    }

    async isscrolledToTop():Promise<void>{
        await this.page.evaluate(() => window.scrollTo(0, 0));
        const scrollPosition = await this.page.evaluate(() => window.scrollY);
        expect(scrollPosition).toBe(0);
    }

} 