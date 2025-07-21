import {Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';
import MegaMenuPage from '../../pages/megamenuPage';
let megaMenuPage: MegaMenuPage;

         When('user clicks on the main menu', async function () {
        megaMenuPage = new MegaMenuPage(pageFixture.page!);
        await megaMenuPage.hoverOnMegaMenu();
         });

         When('clicks on apple option', async function () {
            await megaMenuPage.clickAppleOption();
         });

         Then('the user should see products from apple', async function () {
          const actualText = await megaMenuPage.getAppleHeadingText();
        expect(actualText).toContain('Apple');
         });