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

// When('the user selects {string} products to display from the dropdown', async function (count: string) {
//     const searchPage = new SearchPage(pageFixture.page!);
//   await searchPage.selectProductCount(count);
// });

// When('the user selects {string} products to display from the dropdown', async (count) => {
//   const dropdown = page.locator('select[id^="input-limit"]');
//   await dropdown.selectOption({ label: count });
// });

When('the user selects {string} products to display from the dropdown', async (count) => {
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

// Then('the user should see the product preview with the description', async function () {
// //     const searchPage = new SearchPage(pageFixture.page!);
// //   const visible = await searchPage.isQuickViewDisplayed();
// //   expect(visible).toBeTruthy();

// const descriptionLocator = this.page.locator('selector-for-description');

// const isVisible = await descriptionLocator.isVisible();
// console.log("Is Description Visible? =>", isVisible);

// const descriptionText = await descriptionLocator.textContent();
// console.log("Description Text =>", descriptionText);

// expect(isVisible).toBeTruthy();

// });


// Then('the user should see the product preview with the description', async function () {
//   const descriptionLocator = this.page.locator('.product-desc'); // Update this selector based on your HTML

//   // Debugging logs
//   console.log('>> Checking if product description is visible');
//   const isVisible = await descriptionLocator.isVisible();
//   console.log('>> isVisible:', isVisible);

//   console.log('>> Checking inner text of the description element');
//   const innerText = await descriptionLocator.textContent();
//   console.log('>> innerText:', innerText);

//   expect(isVisible).toBeTruthy(); // This is where your test is failing
// });



Then('the user should see the product preview with the description', async function () {
  const searchPage = new SearchPage(pageFixture.page!);
  const visible = await searchPage.isQuickViewDisplayed();

  console.log("✅ Quick view visible:", visible);
  expect(visible).toBeTruthy(); // Assertion stays
});



When('clicks the Add To Cart option', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.clickAddToCart();
});

// Then('the user sees a popup message', async function () {
//     const searchPage = new SearchPage(pageFixture.page!);
//   const isVisible = await searchPage.isPopupMessageVisible();
//   expect(isVisible).toBeTruthy();
// });

Then('the user sees a popup message', async function () {
  const searchPage = new SearchPage(pageFixture.page!);
  const isVisible = await searchPage.isPopupMessageVisible();

  console.log("DEBUG: isPopupMessageVisible result:", isVisible);
  expect(isVisible).toBeTruthy(); // this is line 143
});



Then('clicks on checkout button to see checkout page', async function () {
    const searchPage = new SearchPage(pageFixture.page!);
  await searchPage.clickCheckout();
  const isDisplayed = await searchPage.isCheckoutPageDisplayed();
  expect(isDisplayed).toBeTruthy();
});
