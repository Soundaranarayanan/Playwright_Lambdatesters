import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
let browser: Browser;

// Given('the user is on the homepage', {timeout: 30000}, async function () {
//     const baseUrl = process.env.BASEURL;
//     if (!baseUrl) throw new Error('BASEURL is not defined in the environment variables');
//     await pageFixture.headerPage!.launchUrl(baseUrl);
//     pageFixture.logger?.info(`Navigated to ${baseUrl}`);
// });
When('the user clicks on My Account.', async function () {
          await pageFixture.headerPage!.clickOnMyAccount();
          pageFixture.logger?.info('Clicked on My Account');
         });
 When('clicks the register button', async function () {
          
           await pageFixture.registerPage!.clickOnRegister();
           pageFixture.logger?.info('Clicked on Register');
          
         });
When('the user should see the registration page', async function () {
          await expect(pageFixture.page!.locator('h1')).toHaveText('Register Account');
         });

 When('the user enters {string}, {string}, {string}, {string}, {string} and {string}', async function (firstName, lastName, emil, telephone, password, confirmPassword) {
          const timestamp = new Date().getTime();
          let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}+${timestamp}@example.com`;
          await pageFixture.registerPage!.enterRegistrationDetails(firstName, lastName, email, telephone, password, confirmPassword);
          pageFixture.logger?.info(`Entered registration details: ${firstName}, ${lastName}, ${email}, ${telephone}, ${password}, ${confirmPassword}`);
          
         });

When('agrees to the Privacy Policy', async function () {
          await pageFixture.registerPage!.agreeToPrivacyPolicy();
          pageFixture.logger?.info('Agreed to Privacy Policy');
         });
 When('submits the registration form', async function () {
          await pageFixture.registerPage!.submitRegistrationForm();
         });

Then('the user should see {string} for {string}', async function (error_message, test_case_name) {
          if(test_case_name=='empty first name'){
                await expect(pageFixture.page!.locator('.text-danger')).toContainText(error_message);
          }
          else if(test_case_name=='existing email'){
                await expect(pageFixture.page!.locator('.alert-danger')).toHaveText(error_message);

          }
          else if(test_case_name=='empty password'){
                const passwordError =pageFixture.page!.locator('#input-password + .text-danger');
                await expect(passwordError).toHaveText(error_message);

          }
          else if(test_case_name=='password mismatch'){
                await expect(pageFixture.page!.locator('.text-danger')).toContainText(error_message);
          }
          else if(test_case_name=='Not checking privacy policy'){
                 await expect(pageFixture.page!.locator('.alert-danger')).toHaveText(error_message);
          }
         });

When('the user enters invalid {string}, {string}, {string}, {string}, {string} and {string}', async function (firstName, lastName, email, telephone, password, confirmPassword) {
          await pageFixture.registerPage!.enterRegistrationDetails(firstName, lastName, email, telephone, password, confirmPassword);
          pageFixture.logger?.info(`Entered registration details: ${firstName}, ${lastName}, ${email}, ${telephone}, ${password}, ${confirmPassword}`);
          
         });

Then('the user should see {string}', async function (string) {
        await expect(pageFixture.page!.locator('h1')).toHaveText(string);
        pageFixture.logger?.info(`Verified that the user sees: ${string}`);
         });
