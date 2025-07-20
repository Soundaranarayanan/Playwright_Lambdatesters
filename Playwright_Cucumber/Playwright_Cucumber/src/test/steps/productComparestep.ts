import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
let browser: Browser;

When('the user searches {string}', async function (string) {
          await pageFixture.productComparePage!.searchproductTocompare(string);
          pageFixture.logger?.info(`Searched for product: ${string}`);
         });

When('the user clicks product compare', async function () {
          await pageFixture.productComparePage!.clickProductCompare();
         });

Then('the user should see no products to compare error {string}', async function (string) {
           await pageFixture.productComparePage!.getnoprodcutsCompareMessage(string);
         });
When('user selects the products to compare', async function () {
           await pageFixture.productComparePage!.selectProductsToCompare();
              pageFixture.logger?.info('Selected products to compare');
         });
When('the user clicks the comparision button', async function () {
            await pageFixture.productComparePage!.clickProductCompareButton();
         });
When('the user clicks the comparision arrow', async function () {
           await pageFixture.productComparePage!.clickComparisonArrow();
           pageFixture.logger?.info('Clicked on comparison arrow');
         });

 Then('the user should see the comparison page', async function () {
           await pageFixture.productComparePage!.getproductDescription();
         });
Then('the user should see the message no products match', async function () {
           await pageFixture.productComparePage!.getnoprodcutsCompare();
         });