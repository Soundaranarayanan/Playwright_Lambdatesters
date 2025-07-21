import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class AddOnDesignPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private addOnDesignPageElements={
       alertRemoveBtn: '//div[contains(@id,"entry_214960")]/div/button',
       alertDiv: "//div[contains(@id,'entry_214956')]/div/div", // list of alerts
       alertContainer: "//div[contains(@id,'entry_214956')]"
    }

    async getAlertDivsCount(){
        await this.page.waitForSelector(this.addOnDesignPageElements.alertDiv, { timeout: 5000 });
        const alertElements = await this.page.$$(this.addOnDesignPageElements.alertDiv);
        return alertElements.length;
    }

    async removeAlert(){
       
        await this.page.waitForSelector(this.addOnDesignPageElements.alertRemoveBtn, { timeout: 5000 });
        
        const beforeCount = await this.getAlertDivsCount();
        
        await this.page.click(this.addOnDesignPageElements.alertRemoveBtn);
        
        await this.page.waitForTimeout(1000);
        
        const afterCount = await this.getAlertDivsCount();
        
    }

    async waitForAlertsToLoad(){
        await this.page.waitForSelector(this.addOnDesignPageElements.alertContainer, { timeout: 10000 });
    }
}