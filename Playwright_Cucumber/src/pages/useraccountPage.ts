import { Locator, Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class UserAccount {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {

 editAccountLink: "//a[text()=' Edit your account information']",
    telephoneInput: "//small[@id='input-telephone-help']/ancestor::div/input",
    continueBtn: "//div[@class='float-left']/following-sibling::div/input",
    successAlert: '.alert-success',
currentPasswordInput: '#input-password',
    newPasswordInput: "//*[@id='input-confirm']",
    confirmPasswordInput: '#input-confirm',
    errormsg:".text-danger"
  };




  async navigateToEditAccountPage(linkText: string) {
    await this.page.locator(this.Elements.editAccountLink).click();
  }

  async updateTelephoneNumber() {
    const phoneField = this.page.locator(this.Elements.telephoneInput);
    await phoneField.fill('9876543210'); 
  }

  async clickContinueButton() {
    await this.page.locator(this.Elements.continueBtn).click();
  }

  async getSuccessMessage(): Promise<string> {
    const alert = this.page.locator(this.Elements.successAlert);
    await alert.waitFor({ state: 'visible', timeout: 10000 });
    return (await alert.textContent())?.trim() || '';
  }
  async getErrorMessage(): Promise<string> {
    const alert = this.page.locator(this.Elements.errormsg);
    await alert.waitFor({ state: 'visible', timeout: 10000 });
    return (await alert.textContent())?.trim() || '';
  }

  async navigateToPage(linkText: string) {
    await this.page.locator(`a:text("${linkText}")`).click();
  }

  async enterPasswordDetails(currentPwd: string, newPwd: string, confirmPwd: string) {
    await this.page.locator(this.Elements.currentPasswordInput).fill(currentPwd);
    await this.page.locator(this.Elements.newPasswordInput).fill(newPwd);
    await this.page.locator(this.Elements.confirmPasswordInput).fill(confirmPwd);
  }

}
