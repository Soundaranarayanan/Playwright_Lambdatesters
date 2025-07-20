import { Locator, Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    myAccountDropdown: "(//div[@id='entry_217834']//a[contains(@class,'dropdown-toggle')])[3]",
    loginLink: "//a[contains(@href,'route=account/login') and normalize-space(text())='Login']",
    username: "(//div[@class='form-group']//descendant::input)[1]",
    password: "(//div[@class='form-group']//following::input[1])[2]",
    loginButton: "//input[@class='btn btn-primary']",
    accountHeader: "(//div/h2[@class='card-header h5'])[1]",
  };

async clickLoginOption() {
  const myAccount = this.page.locator("(//div[@id='entry_217834']//a[contains(@class,'dropdown-toggle')])[3]");
  await myAccount.waitFor({ state: 'visible',timeout:9000 });
  await myAccount.click();
}

  async enterUsername(username: string) {
    await this.page.locator(this.Elements.username).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator(this.Elements.password).fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(this.Elements.loginButton).click();
  }

  async verifyLoginSuccess() {
    const header = this.page.locator(this.Elements.accountHeader);
    await expect(header).toBeVisible({ timeout: 5000 });
  }
  async getWarningText(): Promise<string> {
  const warningLocator = this.page.locator("//div[contains(@class,'alert-danger')]");
  await warningLocator.waitFor({ state: 'visible' });
  return (await warningLocator.textContent())?.trim() || '';
}

async logout() {
  const logoutBtn = this.page.locator("//a[text()=' Logout']");
  await logoutBtn.waitFor({ state: 'visible' });
  await logoutBtn.click();
}

async getLogoutConfirmation(): Promise<string> {
  const logoutHeading = this.page.locator("//h1[text()=' Account Logout']");
  await logoutHeading.waitFor({ state: 'visible' });
  return (await logoutHeading.textContent())?.trim() || '';
}
}



    