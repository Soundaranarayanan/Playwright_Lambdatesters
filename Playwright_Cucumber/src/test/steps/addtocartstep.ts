import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import addToCartPage from '../../pages/addToCartPage';

let addtoCartPage: addToCartPage;

Given('the user is on homepage', async function () {
  await pageFixture.page?.goto('https://ecommerce-playground.lambdatest.io/');
  pageFixture.logger?.info('Navigated to the homepage');
  addtoCartPage = new addToCartPage(pageFixture.page!);
});

When('user clicks the Phones & PDAs category', async function () {
  addtoCartPage = new addToCartPage(pageFixture.page!);
  await addtoCartPage.clickPhonesCategory();
});

When('user selects the iPod Nano product', async function () {
  await addtoCartPage.selectiPodNano();
});

When('user clicks on the Add to Cart button', async function () {
  await addtoCartPage.clickAddToCart();
});

Then('user should see a confirmation message stating {string}', async function (message: string) {
  const confirmation = await addtoCartPage.getAddToCartConfirmation();
  expect(confirmation).toContain(message);
});

When('user views the shopping cart', async function () {
  await addtoCartPage.viewCart();
});

When('user removes iPod Nano from the cart', async function () {
  await addtoCartPage.removeiPodNano();
});

Then('the shopping cart should display {string}', async function (message: string) {
  const cartText = await addtoCartPage.getCartEmptyText();
  expect(cartText).toContain(message);
});
When('user selects the Apple Cinema 30 product', async function () {
  await addtoCartPage.selectAppleCinemaProduct();
});

// When('user sets the quantity to {int}', async function (quantity: number) {
//   await addtoCartPage.setQuantity();
// });

Then('user should see a message {string}', async function (message: string) {
  const validationMsg = await addtoCartPage.getValidationMessage();
  expect(validationMsg).toContain(message);
});
