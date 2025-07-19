import { Page } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';
import { expect } from '@playwright/test';


export default class AffiliatePage {
  private page: Page;
  private base: PlaywrightWrapper;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    myAccount: "(//div[@id='entry_217834']/descendant::a[@class='icon-left both nav-link dropdown-toggle'])[3]//span",
    registerBtn: "(//a[@class='icon-left both dropdown-item']/div/span)[4]",
    sideRegister:"(//a[@class='list-group-item'])[1]",
    registrationPageHeader: "//h1[text()='Register Account']",
    firstName: '#input-firstname',
    lastName: '#input-lastname',
    email: '#input-email',
    phone: '#input-telephone',
    password: '#input-password',
    confirmPassword: '#input-confirm',
    // privacyPolicyCheckbox: 'input[type="checkbox"][name="agree"]',
     privacyPolicyCheckbox: '//*[@id="content"]/form/div/div/div/label/text()',
    submitBtn: '//*[@id="content"]/form/div/div/input',
    successAlert: "//h1[@class='page-title my-3']",
    continueBtn: "//a[@class='btn btn-primary']",
    registerAffiliate: "//div[@class='card-body text-center text-sm-left']/descendant::a",
    payeeName: "//div[@class='col-sm-10']/descendant::input[@name='cheque']",
    checkbox: "//input[@type='checkbox']",
    affContinue: "//input[@class='btn btn-primary']",
    affSuccessMsg: "(//div[@class='alert alert-success alert-dismissible'])[1]",
    affErrorMsg: "(//div[@class='text-danger'])[1]"
  };

  async clickMyAccount() {
    // await this.base.click(this.Elements.myAccount);
//     await this.page.waitForSelector(this.Elements.myAccount, { state: 'visible', timeout: 5000 });
//   await this.base.click(this.Elements.myAccount);
//   await this.page.waitForTimeout(1000); // Small wait for dropdown animation

const myAccountElement = this.page.locator(this.Elements.myAccount);

  // Hover to trigger dropdown
  await myAccountElement.hover();

  // Wait for the Register option to be visible
  await this.page.waitForSelector(this.Elements.registerBtn, { state: 'visible', timeout: 3000 });
  }

  async clickRegisterButton() {
    await this.base.click(this.Elements.registerBtn);
    await this.base.click(this.Elements.sideRegister);
  }

  async verifyRegistrationPage() {
    await this.base.waitForVisibility(this.Elements.registrationPageHeader);
  }

  async enterRegistrationDetails(fname: string, lname: string, email: string, phone: string, password: string, confirmpass: string) {
    await this.base.type(this.Elements.firstName, fname);
    await this.base.type(this.Elements.lastName, lname);
    await this.base.type(this.Elements.email, email);
    await this.base.type(this.Elements.phone, phone);
    await this.base.type(this.Elements.password, password);
    await this.base.type(this.Elements.confirmPassword, confirmpass);
  }

//   async enterRegistrationDetails(fname: string, lname: string, email: string, phone: string, password: string, confirmpass: string) {
//     // Generate unique email
//     const timestamp = Date.now(); // Example: 1721385600000
//     const uniqueEmail = `testuser${timestamp}@example.com`;

//     // Store it somewhere if you need it later (optional)
//     console.log("Generated Email:", uniqueEmail);

//     await this.base.type(this.Elements.firstName, fname);
//     await this.base.type(this.Elements.lastName, lname);
//     await this.base.type(this.Elements.email, uniqueEmail); // use dynamic email
//     await this.base.type(this.Elements.phone, phone);
//     await this.base.type(this.Elements.password, password);
//     await this.base.type(this.Elements.confirmPassword, confirmpass);
//   }


  async agreePrivacyPolicy() {
    // await this.base.check(this.Elements.privacyPolicyCheckbox);
  }

  async submitRegistration() {
    // await this.base.click(this.Elements.submitBtn);
    await this.page.locator('#input-agree').check({ force: true });
    await this.base.click(this.Elements.submitBtn);

  }

  async verifySuccessMessage(msg: string) {
    const text = await this.base.getText(this.Elements.successAlert);
    expect(text).toContain(msg);
  }

  async clickContinueOnRegister() {
    await this.base.click(this.Elements.continueBtn);
  }

  async clickRegisterAffiliate() {
    await this.base.click(this.Elements.registerAffiliate);
  }

  async enterPayeeName(name: string) {
    await this.base.type(this.Elements.payeeName, name);
  }

  async clickCheckBox() {
    await this.base.check(this.Elements.checkbox);
  }

  async clickAffiliateContinue() {
    await this.base.click(this.Elements.affContinue);
  }

  async verifyAffiliateMessage(message: string, check: string) {
    if (check === 'valid') {
      const msg = await this.base.getText(this.Elements.affSuccessMsg);
      expect(msg).toContain(message);
    } else {
      const err = await this.base.getText(this.Elements.affErrorMsg);
      expect(err).toContain(message);
    }
  }
}