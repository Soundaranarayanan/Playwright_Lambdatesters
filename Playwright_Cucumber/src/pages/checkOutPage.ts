import {expect,Page,Locator} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class CheckoutPage{
    private base:PlaywrightWrapper;
    constructor(private page:Page){
        this.base=new PlaywrightWrapper(page);
    }

    private ProductCheckoutPageElements={
    productImage:'//a[contains(@id,"mz-product-grid-image-47-212469")]//div//div[1]/child::img',
    addToCartBtn: "(//button[text()='Add to Cart'])[2]",
    viewCartIcon: "//a[text()='View Cart ']",
    shoppingcartIcon: "#entry_217825 a.cart",
    // shoppingcartTopIcon:'//a[@href="#cart-total-drawer" and contains(@class,"cart") and .//span[contains(@class,"cart-item-total")]])[1]',
    checkoutFromCart:'//div[contains(@class,"row mb-3 align-items-end")]/following-sibling::div[@class="buttons d-flex"]//a[2]',
    guestUser: "//div[contains(@class,'sticky-top')]/child::div[contains(@class,'mb-5')]//div[1]//div[3]",
    registerUser: "//div[contains(@class,'sticky-top')]/child::div[contains(@class,'mb-5')]//div/div[2]/child::label",
    removeProduct: "//*[@id='checkout-cart']/table/tbody/tr/td[3]/div/div/button[2]",
    paymentFname: "//div[contains(@id,'account-detail')]//div[2]//child::input[@id='input-payment-firstname']",
    paymentLname: "#account-detail div:nth-of-type(3)>div input",
    paymentEmail: "#account-detail div:nth-of-type(4)>div input",
    paymentTelephone: "#account-detail div:nth-of-type(5)>div input",
    paymentAddress: "//div[starts-with(@id,'payment-address')]//div[2]//div//input[contains(@id,'input-payment-address-1')]",
    paymentCity: "#payment-address div:nth-of-type(4)>div>input",
    paymentPostcode: "#payment-address div:nth-of-type(5)>div>input",
    pass: "//input[starts-with(@id,'input-payment-password')]",
    confirmpass: "//input[starts-with(@id,'input-payment-confirm')]",
    paymentCheckBox: "//*[@id='form-checkout']/div/div[2]/div/div[5]/child::label",
    continuePayment: "//*[@id='button-save']",
    countryDropdown: "//select[@id='input-payment-country']",
    regionDropdown: "//select[@id='input-payment-zone']",
    termsCheckbox: "//*[@id='form-checkout']/div/div[2]/div/div[5]/child::label",
    privacyCheckbox: "//*[@id='form-checkout']/div/div[2]/div/div[4]/child::label",
    continueButton: "//*[starts-with(@id,'button-save')]",
    confirmOrder: "//*[@id='button-confirm']",
    orderSuccessMessage: "//*[@id='content']/p[2]",
    checkBoxWarn: "//*[@id='form-checkout']/div[1]",
    // emptyCartMessage: "//*[@id='content']/p",
    emptyCartMessage:"text=Your shopping cart is empty!",
    existingAdd: "//*[@id='payment-address']/div[1]/div[1]",
    newAdd: "//*[@id='payment-address']/div[2]/div/label",
    duplicateEmail: "//*[@id='account-detail']/div[4]/div/div"
    
}

    async clickOnProductImage():Promise<void>{
        const productImage:Locator=this.page.locator(this.ProductCheckoutPageElements.productImage);
        await this.base.click(productImage);
    }

    async clickAddToCartButton():Promise<void>{
        const addToCartBtn:Locator=this.page.locator(this.ProductCheckoutPageElements.addToCartBtn);
        await this.base.click(addToCartBtn);
    }

    async viewCart():Promise<void>{
        const viewCartIcon:Locator=this.page.locator(this.ProductCheckoutPageElements.viewCartIcon);
        await this.base.click(viewCartIcon);
    }

    async clickCheckoutButton():Promise<void>{
        const checkoutFromCart:Locator=this.page.locator(this.ProductCheckoutPageElements.checkoutFromCart);
        await this.base.click(checkoutFromCart);
    }

    async selectGuestCheckout():Promise<void>{
        const guestUser:Locator=this.page.locator("//div[contains(@class,'sticky-top')]/child::div[contains(@class,'mb-5')]//div[1]//div[3]");
        await this.base.click(guestUser);
    }
    async fillCheckoutForm(formData: Record<string, string>): Promise<void>{
        

        await this.base.fill(this.ProductCheckoutPageElements.paymentFname, formData['First Name']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentLname, formData['Last Name']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentEmail, formData['Email']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentTelephone, formData['Telephone']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentAddress, formData['Address']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentCity, formData['City']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentPostcode, formData['Postcode']);
        await this.base.fill(this.ProductCheckoutPageElements.pass, '1234');
        await this.base.fill(this.ProductCheckoutPageElements.confirmpass, '1234');

        await this.base.select(this.ProductCheckoutPageElements.countryDropdown, formData['Country']);
        await this.base.select(this.ProductCheckoutPageElements.regionDropdown, formData['Region']);
        

    }
    async waitforsometime(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async acceptTermsAndConditions(): Promise<void> {
        const termsCheckbox: Locator = this.page.locator(this.ProductCheckoutPageElements.termsCheckbox);
        await this.base.check(termsCheckbox);
    }
    async clickContinueButton(): Promise<void> {
        const continueButton: Locator = this.page.locator(this.ProductCheckoutPageElements.continueButton);
        await this.base.click(continueButton);
    }
    async clickConfirmOrderButton(): Promise<void> {
        const confirmOrderButton: Locator = this.page.locator(this.ProductCheckoutPageElements.confirmOrder);
        await this.base.click(confirmOrderButton);
    }
    async getOrderSuccessMessage(): Promise<string> {
        const successMessage: Locator = this.page.locator(this.ProductCheckoutPageElements.orderSuccessMessage);
        return this.base.getText(successMessage);
    }

    async clickOnShoppingCartIcon(): Promise<void> {
        const shoppingCartIcon: Locator = this.page.locator(this.ProductCheckoutPageElements.shoppingcartIcon);
        await this.base.click(shoppingCartIcon);
    }

    async getEmptyCartMessage(): Promise<string> {
        const emptyCartMessage: Locator = this.page.locator(this.ProductCheckoutPageElements.emptyCartMessage);
        return this.base.getText(emptyCartMessage);
    }
    async selectRegisteredUserCheckout(): Promise<void> {
        const registerUser: Locator = this.page.locator(this.ProductCheckoutPageElements.registerUser);
        await this.base.click(registerUser);
    }

    async fillCheckoutRegisterForm(formData: Record<string, string>): Promise<void> {
        const timestamp = new Date().getTime();
        let email = `${formData['First Name'].toLowerCase()}.${formData['Last Name'].toLowerCase()}+${timestamp}@example.com`;
        await this.base.fill(this.ProductCheckoutPageElements.paymentFname, formData['First Name']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentLname, formData['Last Name']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentEmail, email);
        await this.base.fill(this.ProductCheckoutPageElements.paymentTelephone, formData['Telephone']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentAddress, formData['Address']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentCity, formData['City']);
        await this.base.fill(this.ProductCheckoutPageElements.paymentPostcode, formData['Postcode']);
        await this.base.fill(this.ProductCheckoutPageElements.pass, '1234');
        await this.base.fill(this.ProductCheckoutPageElements.confirmpass, '1234');
        await this.base.select(this.ProductCheckoutPageElements.countryDropdown, formData['Country']);
        await this.base.select(this.ProductCheckoutPageElements.regionDropdown, formData['Region']);
         
    }

    async acceptPrivacyPolicy(): Promise<void> {
        const privacyCheckbox: Locator = this.page.locator(this.ProductCheckoutPageElements.privacyCheckbox);
        await this.base.check(privacyCheckbox);
    }

    async getEmailAlreadyExistsError(): Promise<string> {
        const errorMessage: Locator = this.page.locator(this.ProductCheckoutPageElements.duplicateEmail);
        return this.base.getText(errorMessage);
    }


}