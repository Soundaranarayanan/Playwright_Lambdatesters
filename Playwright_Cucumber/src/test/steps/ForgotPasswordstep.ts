import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import ForgotPasswordPage from '../../pages/ForgotPasswordPage';

let forgotPasswordPage: ForgotPasswordPage;

When('user clicks on Forgotten Password link', async function () {
  forgotPasswordPage = new ForgotPasswordPage(pageFixture.page!);
  await forgotPasswordPage.clickForgotPasswordLink();
  pageFixture.logger?.info('Clicked on Forgotten Password link');
});

When('user enters {string} to receive reset link', async function (email: string) {
  await forgotPasswordPage.enterResetEmail(email);
  pageFixture.logger?.info(`Entered email for password reset: ${email}`);
});

When('user clicks continue', async function () {
  await forgotPasswordPage.clickContinueButton();
  pageFixture.logger?.info('Clicked on Continue button');
});

Then('user should a message {string}', async function (message: string) {
  const alertMsg = await forgotPasswordPage.getResetAlertMessage();
  expect(alertMsg).toContain(message);
  pageFixture.logger?.info(`Verified message: ${message}`);
});
