import { Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ESPPage {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    if (!page || page.isClosed()) {
      throw new Error("Provided page is null or already closed.");
    }
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    shoppingCartLink: "(//a[@href='#cart-total-drawer' and contains(@class,'cart') and .//span[contains(@class,'cart-item-total')]])[1]",
    editCartButton: "//a[@role='button' and contains(@class,'btn-block') and normalize-space()='Edit cart']",
    estimateShippingBtn: "//div[@id=\"collapse-shipping\"]/preceding-sibling::h5",
    countryDropdown: "#input-country",
    stateDropdown: "#input-zone",
    postcodeField: "#input-postcode",
    getQuotesButton: "//button[contains(@id, 'button-quote')]",
    flatRateOption: "//div[contains(@class, 'form-check')]/label/input",
    applyShippingBtn: "//button[contains(@id, 'button-shipping')]",
    successMessage: "//div[contains(@class, 'alert') and contains(@class, 'alert-success')]",
    errormsg:"//div[text()='Please select a region / state!']"
  };

  async clickShoppingCart() {
    const cart = this.page.locator(this.Elements.shoppingCartLink);
    await cart.waitFor({ state: 'visible', timeout: 10000 });
    await cart.scrollIntoViewIfNeeded();

    // This wait can help in real slow UI responses
    await this.page.waitForTimeout(500);

    await Promise.all([
      this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }).catch(() => {}),
      cart.click()
    ]);
  }

  async clickEditCart() {
    const editCart = this.page.locator(this.Elements.editCartButton);
    await editCart.waitFor({ state: 'visible', timeout: 10000 });
    await editCart.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(300);
    await editCart.click();
  }

  async clickEstimateShippingAndTaxes() {
    const estimateBtn = this.page.locator(this.Elements.estimateShippingBtn);
    await estimateBtn.waitFor({ state: 'visible', timeout: 10000 });
    await estimateBtn.click();
  }

  async enterShippingDetails() {
    const countryDropdown = this.page.locator(this.Elements.countryDropdown);
    await countryDropdown.waitFor({ state: 'visible', timeout: 10000 });
    await countryDropdown.selectOption({ label: 'United States' });

    const stateDropdown = this.page.locator(this.Elements.stateDropdown);
    await stateDropdown.waitFor({ state: 'visible', timeout: 10000 });
    await stateDropdown.selectOption({ label: 'Aberdeen' });

    const postcodeField = this.page.locator(this.Elements.postcodeField);
    await postcodeField.waitFor({ state: 'visible', timeout: 10000 });
    await postcodeField.fill('12345');
  }

  async clickGetQuotes() {
    const getQuotes = this.page.locator(this.Elements.getQuotesButton);
    await getQuotes.waitFor({ state: 'visible', timeout: 10000 });
    await getQuotes.click();
  }

  async selectFlatShippingAndApply() {
    const flatRate = this.page.locator(this.Elements.flatRateOption);
    await flatRate.waitFor({ state: 'visible', timeout: 10000 });
    await flatRate.check();

    const applyBtn = this.page.locator(this.Elements.applyShippingBtn);
    await applyBtn.waitFor({ state: 'visible', timeout: 10000 });
    await applyBtn.click();
  }

  async getSuccessMessage(): Promise<string> {
    const successMsg = this.page.locator(this.Elements.successMessage);
    await successMsg.waitFor({ state: 'visible', timeout: 10000 });
    return (await successMsg.textContent())?.trim() || '';
  }

  async errormsg(): Promise<string> {
    const err = this.page.locator(this.Elements.errormsg);
    await err.waitFor({ state: 'visible', timeout: 10000 });
    return (await err.textContent())?.trim() || '';
  }

async InvalidShippingDetails() {
    const countryDropdown = this.page.locator(this.Elements.countryDropdown);
await countryDropdown.waitFor({ state: 'visible', timeout: 10000 });
await countryDropdown.selectOption({ label: 'United States' });
const stateDropdown = this.page.locator(this.Elements.stateDropdown);
await stateDropdown.waitFor({ state: 'visible', timeout: 10000 });
const postcodeField = this.page.locator(this.Elements.postcodeField);
await postcodeField.waitFor({ state: 'visible', timeout: 10000 });
await postcodeField.fill('12345');

  }

}
