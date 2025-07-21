import { Locator, Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class MegaMenuPage {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    megaMenu: "(//a[@class='icon-left both nav-link dropdown-toggle']/div/span)[1]",
    appleOption: "(//a[contains(text(), 'Apple')])[1]",
    appleHeading: "//div[@id='entry_212427']/h1"
  };

  async hoverOnMegaMenu() {
    const megaMenuLocator = this.page.locator(this.Elements.megaMenu);
    await megaMenuLocator.waitFor({ state: 'visible', timeout: 9000 });
    await megaMenuLocator.hover();

    const appleOptionLocator = this.page.locator(this.Elements.appleOption);
    await appleOptionLocator.waitFor({ state: 'visible', timeout: 5000 });
  }

  async clickAppleOption() {
    const appleOptionLocator = this.page.locator(this.Elements.appleOption);
    await appleOptionLocator.click();
  }

  async getAppleHeadingText(): Promise<string> {
    const appleHeadingLocator = this.page.locator(this.Elements.appleHeading);
    await appleHeadingLocator.waitFor({ state: 'visible', timeout: 5000 });
    return await appleHeadingLocator.innerText();
  }
}
