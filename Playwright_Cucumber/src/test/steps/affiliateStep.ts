import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import BlogPage from '../../pages/affiliatePage';
import AffiliatePage from '../../pages/affiliatePage';
       
let affiliatePage:AffiliatePage;

// Given('the user is on the homepage', async function () {
//      affiliatePage = new AffiliatePage(pageFixture.page!);
//   await pageFixture.page!.goto('https://ecommerce-playground.lambdatest.io/');
// });

         When('the user clicks on My Account and click on register', async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        affiliatePage = new AffiliatePage(pageFixture.page!);
            await affiliatePage.clickMyAccount();
            await affiliatePage.clickRegisterButton();
         });

         When('the user clicks on continue on register', async function () {
         await affiliatePage.clickContinueOnRegister();
         });

  

         When('the user clicks on register your affiliate information', async function () {
           await affiliatePage.clickRegisterAffiliate();
         });

 

         When('enters payee name {string}', async function (name) {
          await affiliatePage.enterPayeeName(name);
         });

   
         When('clicks on checkbox', async function () {
           await affiliatePage.clickCheckBox();
});

  

         When('clicks on register continue button', { timeout: 20000 },async function () {
            await affiliatePage.clickAffiliateContinue();
         });

  

         Then('the user sees {string} based on {string}',{ timeout: 20000 }, async function (message, check) {
           await affiliatePage.verifyAffiliateMessage(message, check);
         });