import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import LoginPage from '../../pages/loginPage';
import dotenv from 'dotenv';
import loginData from '../../helper/testData/login.json';


dotenv.config();

let loginPage: LoginPage;

Given('the user is on the homepage', async function () {
await pageFixture.page?.goto(process.env.BASE_URL || 'https://ecommerce-playground.lambdatest.io/');
  pageFixture.logger?.info('Navigated to the homepage');
  loginPage = new LoginPage(pageFixture.page!);
});

When('the user clicks on My Account and selects login', async function () {
  await loginPage.clickLoginOption();
  pageFixture.logger?.info('Clicked on My Account and selected Login');
});

// When('the user enters valid credentials', async function () {
//   await loginPage.enterUsername(process.env.VALID_EMAIL!);
//   await loginPage.enterPassword(process.env.VALID_PASSWORD!);
//   pageFixture.logger?.info('Entered valid credentials');
// });

When('the user enters valid credentials', async function () {
  const { email, password } = loginData.validLogins[0];
  await loginPage.enterUsername(email);
  await loginPage.enterPassword(password);
  pageFixture.logger?.info(`Entered valid credentials from JSON: ${email}`);
});


When('the user clicks on the Login button', async function () {
  await loginPage.clickLoginButton();
  pageFixture.logger?.info('Clicked on the Login button');
});

Then('the user should see the My Account page', async function () {
  await loginPage.verifyLoginSuccess();
  pageFixture.logger?.info('Verified user is on My Account page');
});

When('the user enters E-Mail {string}', async function (email: string) {
  await loginPage.enterUsername(email);
});

When('the user enters Password {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

Then('the user should see the {string} and {string}', async function (expectedResult: string, check: string) {
  const warningText = await loginPage.getWarningText();
  const possibleMessages = [
    "Warning: No match for E-Mail Address and/or Password.",
    "Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour."
  ];

  expect(
    possibleMessages.some(msg => warningText.includes(msg)),
    `Expected warning to be one of the possible messages but got: "${warningText}"`
  ).toBe(true);
});

Then('the user logs out', async function () {
  await loginPage.logout();
  pageFixture.logger?.info('User logged out');
});

Then('the user should see the Account Logout page', async function () {
  const logoutHeading = await loginPage.getLogoutConfirmation();
  expect(logoutHeading).toContain('Account Logout');
  pageFixture.logger?.info('Logout confirmation verified');
});
