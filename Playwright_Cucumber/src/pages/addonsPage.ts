import { Page, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/PlaywrightWrappers';

export default class AddOnsPage {
  private page: Page;
  private base: PlaywrightWrapper;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    addons: "(//a[@class='icon-left both nav-link dropdown-toggle']/div/span)[2]",
    design: "//a[@class='icon-left both dropdown-item']/following::a/div/span[contains(text(), 'Designs')]",
    alertText: "(//div//h2[@class='mb-4'])[1]",
    cameraMenu: "(//div[@class='menu-items d-flex align-items-start']/following::a[@title='Cameras'])[1]",
    cameraPageText: "//h1[@class='h4']",
    alertDivs: "//div[contains(@id,'entry_214956')]/div/div",
    alertRemoveBtn: "//div[contains(@id,'entry_214960')]/div/button",
    cam: "(//div[@class='menu-items d-flex align-items-start']/descendant::a[@class='nav-link icon-left text'])[33]",
    camPageText: "(//div[@class='caption']/h4/a[@class='text-ellipsis-2'])[1]",
  };

  async clickAddonsMenu() {
    await this.base.click(this.Elements.addons);
  }

  async clickDesignOption() {
    await this.clickAddonsMenu();
    await this.base.waitForVisibility(this.Elements.design);
    await this.base.click(this.Elements.design);
  }

  async getAlertText(): Promise<string> {
    return await this.base.getText(this.Elements.alertText);
  }

  async getAlertCount(): Promise<number> {
    return await this.page.locator(this.Elements.alertDivs).count();
  }

  async removeAnAlert() {
    await this.base.click(this.Elements.alertRemoveBtn);
  }

  async clickCameraMenu() {
    await this.base.click(this.Elements.cam);
  }

  async getCameraPageText(): Promise<string> {
    return await this.base.getText(this.Elements.camPageText);
  }
}
