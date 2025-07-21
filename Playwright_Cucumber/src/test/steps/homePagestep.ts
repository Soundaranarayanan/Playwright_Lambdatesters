import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
let browser: Browser;
let allLinks: Array<string> = [];
When('the user clicks the shop now in first block', async function () {
           await pageFixture.homePage!.block1click();
         });
Then('the user needs to redirect to the top of home page', async function () {
           await pageFixture.homePage!.isscrolledToTop();
         });
When('the user clicks shop now in second block', async function () {
           await pageFixture.homePage!.block2click();
         });
Then('the user should see the {string} page', async function (string) {
           await pageFixture.homePage!.isProductPage(string);
         });
When('the user clicks hp25 Headphones poster', async function () {
           await pageFixture.homePage!.clickheadphonesBanner();
         });
Then('the user should see the {string} product page', async function (string) {
           await pageFixture.homePage!.isProductPage(string);
         });
When('the user clicks the product in the trending product category', async function () {
           await pageFixture.homePage!.clickTrendingProduct();
         });
Then('the user should redirect to the product page', async function () {
           await pageFixture.homePage!.trendMacDescription();
         });

 When('the user retrieves all the links on the homepage', async function () {
           
           allLinks = await pageFixture.homePage!.getAllLinks();
           
         });
// Then('each link should redirect to its corresponding page successfully', async function () {
//            //need to check for broken links based on the response code
//               for (const link of allLinks) {
//                 await pageFixture.homePage!.checkLink(link);
//               }
//          });

Then('each link should redirect to its corresponding page successfully', { timeout: 120000 }, async function () {
    if (!pageFixture.homePage) {
        throw new Error('homePage is undefined');
    }
    
    const allLinks = await pageFixture.homePage.getAllLinks();
    console.log(`Found ${allLinks.length} links to check`);
    
    // Check links with progress logging
    for (let i = 0; i < allLinks.length; i++) {
        console.log(`Checking link ${i + 1}/${allLinks.length}: ${allLinks[i]}`);
        await pageFixture.homePage.checkLink(allLinks[i]);
    }
    
    pageFixture.logger?.info(`Validated ${pageFixture.homePage.validlinkCount} links successfully`);
});
