import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import BlogPage from '../../pages/affiliatePage';
import AffiliatePage from '../../pages/affiliatePage';
       
let affiliatePage:AffiliatePage;

         When('the user clicks on My Account and click on register', async function () {
        affiliatePage = new AffiliatePage(pageFixture.page!);
            await affiliatePage.clickMyAccount();
            await affiliatePage.clickRegisterButton();
         });

  

         Then('the user should see the registration page',  { timeout: 20000 },async function () {
        await affiliatePage.verifyRegistrationPage();
         });

          When(
            'the user enters {string}, {string}, {string}, {string}, {string} and {string}',
            async function (fname, lname, email, phone, password, confirmpass) {
              // Generate unique email if placeholder is 'random'
              const finalEmail =
                email === 'random'
                  ? `user_${Date.now()}@testmail.com`
                  : email;

              console.log("Generated email:", finalEmail); 

              await affiliatePage.enterRegistrationDetails(
                fname,
                lname,
                finalEmail,
                phone,
                password,
                confirmpass
              );
            }
          );

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

        When('clicks on checkbox based on {string}', async function (checkbox) {
          const shouldClick = checkbox.toLowerCase() === 'yes';
          await affiliatePage.clickCheckBoxIfRequired(shouldClick);
        });

         When('clicks on register continue button', { timeout: 20000 },async function () {
            await affiliatePage.clickAffiliateContinue();
         });

  
         Then('the user should see the affiliate message as {string}', async function (expectedMessage) {
            const messageElement = await this.page.locator('.alert'); // or the exact selector of the message box
            const actualMessage = await messageElement.textContent();
            expect(actualMessage.trim()).toContain(expectedMessage);
         });

