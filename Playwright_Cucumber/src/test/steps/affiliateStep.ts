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

        //  When('When the user clicks on My Account and click on register', async function () {
        //    affiliatePage = new AffiliatePage(pageFixture.page!);
        //     // await affiliatePage.clickMyAccount();
        //     await affiliatePage.clickRegisterButton();
        //  });
   
        //  When('clicks the register button', async function () {
        //    await affiliatePage.clickRegisterButton();
        //  });

         When('the user clicks on My Account and click on register', async function () {
        //    // Write code here that turns the phrase above into concrete actions
        //    return 'pending';
        affiliatePage = new AffiliatePage(pageFixture.page!);
            await affiliatePage.clickMyAccount();
            await affiliatePage.clickRegisterButton();
         });

  

         Then('the user should see the registration page',  { timeout: 20000 },async function () {
        await affiliatePage.verifyRegistrationPage();
         });

 

        //  When('the user enters {string}, {string}, {string}, {string}, {string} and {string}', async function (string, string2, string3, string4, string5, string6) {
        //    await affiliatePage.enterRegistrationDetails(fname, lname, email, phone, password, confirmPass);
        //  });
When('the user enters {string}, {string}, {string}, {string}, {string} and {string}', 
  async function (fname, lname, email, phone, password, confirmPass) {
    await affiliatePage.enterRegistrationDetails(fname, lname, email, phone, password, confirmPass);
});

// When(
//   'the user enters {string}, {string}, {string}, {string}, {string} and {string}',
//   async function (fname, lname, email, phone, password, confirmpass) {
//     affiliatePage = new AffiliatePage(this.pageFixture.page);

//     // Generate unique email
//     // const uniqueEmail = `user_${Date.now()}@testmail.com`;

//     // await affiliatePage.enterRegistrationDetails(fname, lname, uniqueEmail, phone, password, confirmpass);


//     const finalEmail = email === 'random' ? `user_${Date.now()}@test.com` : email;
// await affiliatePage.enterRegistrationDetails(fname, lname, finalEmail, phone, password, confirmpass);
//   }
// );


         When('agrees to the Privacy Policy',async function () {
        //   await affiliatePage.agreePrivacyPolicy();
         });

   
         When('submits the registration form', {timeout:10000},async function () {
           await affiliatePage.submitRegistration();
         });

 

         Then('the user should see {string}', async function (message) {
           await affiliatePage.verifySuccessMessage(message);
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