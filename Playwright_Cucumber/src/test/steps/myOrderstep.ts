import { Given, When, Then} from '@cucumber/cucumber';
import {chromium , Page , Browser , expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

let browser: Browser;

When('the user clicks on My Account in the top', async function () {
    if (!pageFixture.myorderPage) {
        throw new Error('myorderPage is undefined');
    }
    await pageFixture.myorderPage.clickOnMyAccount();
    pageFixture.logger?.info('Clicked on My Account dropdown');
});

When('clicks my order history', async function () {
   await pageFixture.myorderPage!.clickOnViewOrderButton();
});

Then('the order history is displayed', async function () {
    await pageFixture.myorderPage!.viewHistoryDisplayed();
});

When('user clicks view button', async function () {
          await pageFixture.myorderPage!.clickOnViewbutton();
         });
 When('the user clicks reorder button', async function () {
           await pageFixture.myorderPage!.clickOnReorderButton();
           pageFixture.logger?.info('Clicked on Reorder button');
         });
Then('the product reordered message should be displayed', async function () {
           await pageFixture.myorderPage!.reorderSuccessMessage();
           pageFixture.logger?.info('Reorder success message is displayed');
         });

When('the user clicks on My Account as guest', async function () {
           if (!pageFixture.myorderPage) {
        throw new Error('myorderPage is undefined');
    }
    await pageFixture.myorderPage.clickOnMyAccount();
    pageFixture.logger?.info('Clicked on My Account dropdown');
         });
When('I click on the Order History link', async function () {
           await pageFixture.myorderPage!.clickOnViewOrderButton();
         });
Then('the page should scroll to the top', async function () {
    await pageFixture.myorderPage!.isscrolledToTop();
    pageFixture.logger?.info('Page scrolled to the top');
});