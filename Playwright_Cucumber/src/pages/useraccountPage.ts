
import { Locator, Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class useraccountPage {
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
    errormsg:".text-danger",
    clicknewsletter:"//*[@id='content']/div[1]/div/div/div[5]/a",
    unsubscribeRadio:"//*[@id='content']/form/fieldset/div/div/div[2]/label",
    subscribeRadio:"//*[@id='content']/form/fieldset/div/div/div[1]/label",

  };




  async navigateToEditAccountPage(linkText: string) {
    await this.page.locator(this.Elements.editAccountLink).click();
  }

  async updateTelephoneNumber() {
    const phoneField = this.page.locator(this.Elements.telephoneInput);
    await phoneField.fill('9876543210'); 
  }
async updateTelephoneNumberInvalid() {
    const phoneField = this.page.locator(this.Elements.telephoneInput);
    await phoneField.fill('98'); 
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
async getEditAccErrormsg(): Promise<string> {
    const alert = this.page.locator(this.Elements.errormsg);
    await alert.waitFor({ state: 'visible', timeout: 10000 });
    return (await alert.textContent())?.trim() || '';
  }
  async navigateToPage(linkText: string) {
    await this.page.locator(`a:text("${linkText}")`).click();
  }
async clickNewsLetter(){
  await this.page.locator(this.Elements.clicknewsletter).click();
}


async selectNewsletterOption(action: string) {

  await this.page.waitForSelector('#content form', { state: 'visible' });
  if (action.toLowerCase() === 'subscribe') {
    await this.page.getByLabel('Yes').check();  
  } else if (action.toLowerCase() === 'unsubscribe') {
    await this.page.getByLabel('No').check();  
  } else {
    throw new Error(`Invalid newsletter action: ${action}`);
  }
}


  async enterPasswordDetails(currentPwd: string, newPwd: string, confirmPwd: string) {
    await this.page.locator(this.Elements.currentPasswordInput).fill(currentPwd);
    await this.page.locator(this.Elements.newPasswordInput).fill(newPwd);
    await this.page.locator(this.Elements.confirmPasswordInput).fill(confirmPwd);
  }

}