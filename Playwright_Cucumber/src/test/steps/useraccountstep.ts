
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import dotenv from 'dotenv';
import useraccountPage from '../../pages/useraccountPage';

dotenv.config();

let useraccount: useraccountPage;

Then('the user clicks the {string} page', async function (linkText: string) {
  useraccount = new useraccountPage(pageFixture.page!);
  await useraccount.navigateToEditAccountPage(linkText);
  pageFixture.logger?.info(`Navigated to "${linkText}" page`);
});


Then('the user updates telephone number', async function () {
  await useraccount.updateTelephoneNumber();
  pageFixture.logger?.info('Updated telephone number');
});
Then('the user updates without providing telephone number', async function () {
  await useraccount.updateTelephoneNumberInvalid();
  pageFixture.logger?.info('Not Updated telephone number');
});


Then('clicks on the {string} Continue button', async function (btnLabel: string) {
  await useraccount.clickContinueButton();
  pageFixture.logger?.info(`Clicked on "${btnLabel}" Continue button`);
});

Then('user should see {string}', async function (expectedMessage: string) {
  const actualMessage = await useraccount.getSuccessMessage();
  expect(actualMessage).toContain(expectedMessage);
  pageFixture.logger?.info(`Verified success message: "${actualMessage}"`);
});
Then('user should see error msg {string}', async function (expectedMessage: string) {
  const actualMessage = await useraccount.getEditAccErrormsg();
  expect(actualMessage).toContain(expectedMessage);
  pageFixture.logger?.info(`Verified success message: "${actualMessage}"`);
});
Then('user should see the {string}', async function (expectedMessage: string) {
  const actualMessage = await useraccount.getErrorMessage();
  expect(actualMessage).toContain(expectedMessage);
  pageFixture.logger?.info(`Verified success message: "${actualMessage}"`);
});

Then('the user clicks the Change your password page', async function () {
  useraccount = new useraccountPage(pageFixture.page!); 
  await useraccount.navigateToPage('Change your password');
  pageFixture.logger?.info('Navigated to Change your password page');
});
When('the user clicks the Newsletter page',async function(){
  useraccount = new useraccountPage(pageFixture.page!);
await useraccount.clickNewsLetter();
});
Then('the user chooses to {string} the newsletter', async function (action: string) {
 // useraccount = new UserAccount(pageFixture.page!);
  await useraccount.selectNewsletterOption(action);
});


Then('the user enters current password and new password details', async function () {
  const currentPassword = process.env.VALID_PASSWORD!;
  const newPassword = process.env.VALID_PASSWORD!;
  await useraccount.enterPasswordDetails(currentPassword, newPassword, newPassword);
  pageFixture.logger?.info('Entered current and new password details');
});