import { Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class addToCartPage {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    phonesCategory: "(//a[@class='icon-left both nav-link']/parent::li)[3]",
    iPodNanoProduct: "//*[@id='mz-product-grid-image-36-212408']/div/div[1]/img",
    addToCartBtn: "(//button[text()='Add to Cart'])[2]",
    successAlert: "//*[@id='notification-box-top']/div/div[2]/div[1]/p",
    cartIcon: "//a[text()='View Cart ']",
    emptyCartText: "//*[@id='content']/p",
    sizereq:"(//select[starts-with(@id,'input-option231')]/following-sibling::div[@class='text-danger' and normalize-space()='Size required!'])[1]",
    quantity:"(//button[@aria-label='Increase quantity'])[2]"
   // quantity: "//input[@id='input-quantity' or @name='quantity']",

  };

  async clickPhonesCategory() {
    const categoryMenu = this.page.locator("//a[text()=' Shop by Category']");
    await categoryMenu.waitFor({ state: "visible" });
    await categoryMenu.click();

    const phones = this.page.locator(this.Elements.phonesCategory);
    await phones.waitFor({ state: "visible" });
    await phones.click();
  }

  async selectiPodNano() {
    const product = this.page.locator(this.Elements.iPodNanoProduct);
    await product.waitFor({ state: "visible" });
    await product.click();
  }

  async clickAddToCart() {
    const addToCartBtn = this.page.locator(this.Elements.addToCartBtn);
    await addToCartBtn.waitFor({ state: "visible" });
    await addToCartBtn.click();
  }

  async getAddToCartConfirmation(): Promise<string> {
    const alert = this.page.locator(this.Elements.successAlert);
    await alert.waitFor({ state: "visible" });
    return (await alert.textContent())?.trim() || '';
  }

  async viewCart() {
    const cart = this.page.locator(this.Elements.cartIcon);
    await cart.waitFor({ state: "visible" });
    await cart.click();
  }

  async removeiPodNano() {
  const removeBtn = this.page.locator("//table//tr[contains(., 'iPod Nano')]//button[contains(@data-original-title,'Remove') or contains(@title,'Remove')]");
  await removeBtn.waitFor({ state: 'visible' });
  await removeBtn.click();
}
async selectAppleCinemaProduct() {
  const productLink = this.page.locator("//a[contains(text(),'Apple Cinema 30')]");
  await productLink.waitFor({ state: 'visible', timeout: 5000 });
  await productLink.click();
}

  async getCartEmptyText(): Promise<string> {
    const emptyText = this.page.locator(this.Elements.emptyCartText);
    await emptyText.waitFor({ state: 'visible' });
    return (await emptyText.textContent())?.trim() || '';
  }


  async getValidationMessage(): Promise<string> {
  const validationAlert = this.page.locator(this.Elements.sizereq);
  await validationAlert.waitFor({ state: 'visible', timeout: 5000 });
  return (await validationAlert.textContent())?.trim() || '';
}


// async setQuantity() {
//   try {
//     const qtyButton = this.page.locator("//button[@aria-label='Increase quantity']");
//     await qtyButton.first().waitFor({ state: 'visible', timeout: 10000 });

//     for (let i = 0; i < 2; i++) {
//       await qtyButton.first().click();
//       await this.page.waitForTimeout(300);
//     }
//   } catch (error) {
//     console.log("Error setting quantity:");
//   }
// }






}
