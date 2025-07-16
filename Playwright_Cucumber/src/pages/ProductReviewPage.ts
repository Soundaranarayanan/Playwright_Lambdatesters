import { Locator, Page, expect } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ProductReview {
  private base: PlaywrightWrapper;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
nameField: '#input-name', 
    reviewField: '#input-review',
    fiveStarRating: "(//input[@name='rating']/following-sibling::label)[1]",
    continueButton: "//div[@class='float-right']/ancestor::div[@class='buttons clearfix']//button",
    successMessage: '.alert-success',
errorMessage:".alert-danger"
  };

async enterReviewerName(name: string) {
    await this.page.locator(this.Elements.nameField).fill(name);
  }

  async enterReviewText(review: string) {
    await this.page.locator(this.Elements.reviewField).fill(review);
  }

  async selectFiveStarRating() {
    await this.page.locator(this.Elements.fiveStarRating).check();
  }

  async submitReview() {
    await this.page.locator(this.Elements.continueButton).click();
  }

  async getReviewSuccessMessage(): Promise<string> {
    const successAlert = this.page.locator(this.Elements.successMessage);
    await successAlert.waitFor({ state: 'visible', timeout: 10000 });
    return (await successAlert.textContent())?.trim() || '';
  }

  async getReviewErrorMessage(): Promise<string> {
  const errorAlert = this.page.locator(this.Elements.errorMessage); 
  await errorAlert.first().waitFor({ state: 'visible', timeout: 5000 });
  return (await errorAlert.first().textContent())?.trim() || '';
}
async selectRating(star: number) {
  const starSelector ="(//input[@name='rating']/following-sibling::label)[2]";
  await this.page.locator(starSelector).check();
}


}

