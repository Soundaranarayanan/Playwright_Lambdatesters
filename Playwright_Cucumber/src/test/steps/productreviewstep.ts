import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import dotenv from 'dotenv';
import ProductReview from '../../pages/ProductReviewPage';

dotenv.config();

let productreview: ProductReview;

Given('user is on the product review section', async function () {
  productreview = new ProductReview(pageFixture.page!);
  pageFixture.logger?.info('Initialized ProductReview page object');
});

When(/^user enters "([^"]*)" in the Name field$/, async function (name: string) {
  await productreview.enterReviewerName(name);
  pageFixture.logger?.info(`Entered reviewer name: ${name}`);
});

When(/^user writes "([^"]*)" in the Review field$/, async function (review: string) {
  await productreview.enterReviewText(review);
  pageFixture.logger?.info(`Entered review text: ${review}`);
});

When('user selects a 5-star rating', async function () {
  await productreview.selectFiveStarRating();
  pageFixture.logger?.info('Selected 5-star rating');
});

When('user clicks on the Continue button to submit the review', async function () {
  await productreview.submitReview();
  pageFixture.logger?.info('Clicked on Continue to submit review');
});

Then(/^success message "([^"]*)" should be displayed$/, async function (message: string) {
  const actualMessage = await productreview.getReviewSuccessMessage();
  pageFixture.logger?.info(`Review submission success message: "${actualMessage}"`);
  expect(actualMessage).toContain(message);
});
When('user leaves the Review field blank', async function () {
  await productreview.enterReviewText('');
  pageFixture.logger?.info('Left the Review field blank');
});

When('user does not select any rating', async function () {
  // Intentionally do nothing
  pageFixture.logger?.info('No rating selected');
});

Then(/^error message "([^"]*)" should be displayed$/, async function (expectedMessage: string) {
  const actualError = await productreview.getReviewErrorMessage();
  pageFixture.logger?.info(`Captured error message: "${actualError}"`);
  expect(actualError).toContain(expectedMessage);
});
When('user selects a 4-star rating', async function () {
  await productreview.selectRating(4);
  pageFixture.logger?.info('Selected 4-star rating');
});
