import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ProductComaprePage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private ProdductComparePageElements={
        productCompare1:"//*[@id='entry_212461']/a",
        productCompare2:"//*[@id='entry_216844']/button",
        searchInput: 'input[name="search"]',
        searchButton: 'button:has-text("Search")',
        noProducts:'//*[@id="content"]/p',
        comparisionArrow:'//*[@id="entry_217823"]/a/span',
        product1:'//*[@id="mz-product-grid-image-41-212469"]/div/div[1]/img',
        comparisionProductDesc:'//*[@id="content"]/table/tbody[1]/tr[8]/td[2]',
        noProductsmatchError:'//*[@id="entry_212469"]/p',
        toastHeader:'.toast-header',
        toastCloseButton:'.close'

    }  

    async searchproductTocompare(searchtext:string ){
        await this.base.fill(this.ProdductComparePageElements.searchInput,searchtext);
        return this.base.waitAndClick(this.ProdductComparePageElements.searchButton);

    }

    async clickProductCompare(){
        return this.base.waitAndClick(this.ProdductComparePageElements.productCompare1);
    }
  
    async getnoprodcutsCompareMessage(message:string){
        const noProducts = this.page.locator(this.ProdductComparePageElements.noProducts);
        await expect(noProducts).toHaveText(message);
    }

   async selectProductsToCompare(){
        return this.base.waitAndClick(this.ProdductComparePageElements.product1);
    }

    async clickProductCompareButton(){
        return this.base.waitAndClick(this.ProdductComparePageElements.productCompare2);
        // return this.base.waitAndClick(this.page.locator('button[title="Compare this Product"]'));
    }

    async clickComparisonArrow(){
        return this.base.waitAndClick(this.ProdductComparePageElements.comparisionArrow);
    }

    async getproductDescription(){
        const productDesc = this.page.locator(this.ProdductComparePageElements.comparisionProductDesc);
        // await expect(productDesc).toBeVisible();
    }
    async getnoprodcutsCompare(){
        const noProductsMatch = this.page.locator(this.ProdductComparePageElements.noProductsmatchError);
        await expect(noProductsMatch).toBeVisible();
    }




}