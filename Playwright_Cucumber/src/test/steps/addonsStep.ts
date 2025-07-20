 import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import AddOnsPage from '../../pages/addonsPage';
import { pageFixture } from '../../hooks/pageFixture';

let addOnsPage: AddOnsPage;
let initialAlertCount: number = 0;

         When('the user clicks on addons', async function () {
          addOnsPage = new AddOnsPage(pageFixture.page!);
          await addOnsPage.clickAddonsMenu();
         });


         When('clicks on designs option', async function () {
            await addOnsPage.clickDesignOption();
         });


         Then('the user should see the design page', async function () {
          const alertText = await addOnsPage.getAlertText();
         expect(alertText).toContain('Alert');
         });


         When('clicks on camera text', async function () {
         await addOnsPage.clickCameraMenu();
         });

         Then('the user should be navigated to camera page', async function () {
        const camText = await addOnsPage.getCameraPageText();
         expect(camText).toContain('HTC Touch HD');
         });
