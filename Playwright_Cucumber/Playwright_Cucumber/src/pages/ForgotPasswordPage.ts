import { Locator, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ForgotPasswordPage {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    forgotPassword: "//input[@type='password']/following-sibling::a",
    emailInput: "//label[@for='input-email']/following-sibling::div/input",
    continueButton: "//div[@class='float-left']/following-sibling::div/button",
    successAlert: "//div[text()=' An email with a confirmation link has been sent your email address.']",
    Alert: "//i/parent::div"
  };

  async clickForgotPasswordLink() {
    const forgotLink = this.page.locator(this.Elements.forgotPassword);
    await forgotLink.waitFor({ state: 'visible' });
    await forgotLink.click();
  }

  async enterResetEmail(email: string) {
    const emailField = this.page.locator(this.Elements.emailInput);
    await emailField.waitFor({ state: 'visible' });
    await emailField.fill(email);
  }

  async clickContinueButton() {
    const continueBtn = this.page.locator(this.Elements.continueButton);
    await continueBtn.waitFor({ state: 'visible' });
    await continueBtn.click();
  }

  async getResetAlertMessage(): Promise<string> {
    const alert = this.page.locator(this.Elements.Alert);
    await alert.waitFor({ state: 'visible' });
    return (await alert.textContent())?.trim() || '';
  }
}
