import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import SearchPage from '../../pages/searchPage';

When('the user searches with {string}', {timeout:5000},async function (input: string) {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.enterSearchTerm(input);
  await searchPage.clickSearchButton();
});


Then('the {string} should be displayed', async function (expected: string) {
  const searchPage = new SearchPage(pageFixture.page!);

  if (expected.toLowerCase().includes('no product')) {
    const isVisible = await searchPage.isNoProductMessageDisplayed();
    const message = await searchPage.getNoProductMessage();
    console.log("Expected:", expected);
    console.log("Is Visible:", isVisible);
    console.log("Actual Message:", message);

    expect(isVisible).toBeTruthy(); // failing here
    expect(message.toLowerCase()).toContain(expected.toLowerCase());
  } else {
    const isVisible = await searchPage.isProductDisplayed(expected);
    expect(isVisible).toBeTruthy();
  }
});





When('the user clicks on Shop by Category', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.clickShopByCategory();
});

When('selects a specific category from the list', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.selectCategory();
});

When('the user enters the minimum value {string}', async function (minValue: string) {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.enterMinimumValue(minValue);
});

When('the user enters the maximum value {string}', async function (maxValue: string) {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.enterMaximumValue(maxValue);
});

Then('the user should see all products within that value range', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  const isValid = await searchPage.verifyPriceRange(50, 2000);
  expect(isValid).toBeTruthy();
});

When('the user selects {string} products to display from the dropdown', async function (count: string) {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.selectProductCount(count);
});

Then('the user should see exactly {string} products displayed on the page', async function (count: string) {
    const searchPage = new SearchPage(pageFixture.page!);
  const visibleCount = await searchPage.getDisplayedProductCount();
  expect(visibleCount).toBe(parseInt(count));
});

When('hovers over a product', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.hoverOverFirstProduct();
});

When('clicks the Quick View option', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.clickQuickView();
});

Then('the user should see the product preview with the description', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  const visible = await searchPage.isQuickViewDisplayed();
  expect(visible).toBeTruthy();
});

When('clicks the Add To Cart option', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.clickAddToCart();
});

Then('the user sees a popup message', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  const isVisible = await searchPage.isPopupMessageVisible();
  expect(isVisible).toBeTruthy();
});

Then('clicks on checkout button to see checkout page', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.clickCheckout();
  const isDisplayed = await searchPage.isCheckoutPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});
