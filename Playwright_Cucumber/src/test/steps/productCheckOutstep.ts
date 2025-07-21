import { Given, When, Then} from '@cucumber/cucumber';

import {chromium , Page , Browser , expect} from '@playwright/test';

import { pageFixture } from '../../hooks/pageFixture';
let browser: Browser;

When('user selects the product', async function () {
    await pageFixture.checkoutPage!.clickOnProductImage();
         });
When('user clicks on the Add to Cart button.', async function () {
           await pageFixture.checkoutPage!.clickAddToCartButton();
         });
When('user views the shopping cart.', async function () {
           await pageFixture.checkoutPage!.viewCart();
         });

When('the user clicks CheckOut', async function () {
           await pageFixture.checkoutPage!.clickCheckoutButton();
         });
When('Select Guest CheckOut', async function () {
           await pageFixture.checkoutPage!.selectGuestCheckout();
         });
 When('Enter the details in form:', async function (dataTable) {
           const formData = dataTable.rowsHash();
           await pageFixture.checkoutPage!.fillCheckoutForm(formData);
        //    add sleep to ensure the form is filled before proceeding
           await pageFixture.checkoutPage!.waitforsometime(5000);
         });
When('the user accepts the terms and condition', async function () {
              await pageFixture.checkoutPage!.acceptTermsAndConditions();
         });
When('clicks continue from the checkout page', async function () {
           await pageFixture.checkoutPage!.clickContinueButton();
         });
When('the user clicks confirm order', async function () {
           await pageFixture.checkoutPage!.clickConfirmOrderButton();
         });
Then('the order success message should be displayed', async function () {
              const successMessage = await pageFixture.checkoutPage!.getOrderSuccessMessage();
              expect(successMessage).toContain('Your order has been successfully processed!');
         });
Given('user views the shopping cart on top.', async function () {
           await pageFixture.checkoutPage!.clickOnShoppingCartIcon();
         });
Then('the user should see the message cart is empty', async function () {
           const emptyCartMessage = await pageFixture.checkoutPage!.getEmptyCartMessage();
           expect(emptyCartMessage).toContain('Your shopping cart is empty!');
         });
When('Select Registered user CheckOut', async function () {
           await pageFixture.checkoutPage!.selectRegisteredUserCheckout();
           
         });
When('Enter the details in payment register form as new user in checkout:', async function (dataTable) {  
           const formData = dataTable.rowsHash();
           await pageFixture.checkoutPage!.fillCheckoutRegisterForm(formData);

         });
When('the user accepts the privacy policy', async function () {
              await pageFixture.checkoutPage!.acceptPrivacyPolicy();
         });

When('Enter the details in payment register form:', async function (dataTable) {
          const formData = dataTable.rowsHash();
           await pageFixture.checkoutPage!.fillCheckoutForm(formData);

         });
Then('the user sould see the email alread exist error', async function () {
           const errorMessage = await pageFixture.checkoutPage!.getEmailAlreadyExistsError();
           expect(errorMessage).toContain('Warning: E-Mail Address is already registered!');
         });