import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import ESPPage from '../../pages/ESPPage';

let esppage: ESPPage;

When('the user clicks on the Shopping Cart', async function () {
    esppage = new ESPPage(pageFixture.page!);
  await esppage.clickShoppingCart();
});

When('the user clicks the Edit Cart button', async function () {
  await esppage.clickEditCart();
});

When('the user clicks the Estimate Shipping and Taxes button', async function () {
  await esppage.clickEstimateShippingAndTaxes();
});

When('the user enters the required shipping details', async function () {
  await esppage.enterShippingDetails();
});
When('the user leaves the shipping details empty', async function () {
  await esppage.InvalidShippingDetails();
});


When('the user clicks the Get Quotes button', async function () {
  await esppage.clickGetQuotes();
});

When('the user selects Flat Shipping Rate and clicks Apply Shipping button', async function () {
  await esppage.selectFlatShippingAndApply();
});

Then('the user should see message {string}', async function (message: string) {
  const successMsg = await esppage.getSuccessMessage();
  expect(successMsg).toContain(message);
});
Then('the user should see error message {string}', async function (message: string) {
  const successMsg = await esppage.errormsg();
  expect(successMsg).toContain(message);
});