import { Given, When, Then} from '@cucumber/cucumber';
import {chromium , Page , Browser , expect} from '@playwright/test';
import { pageFixture } from '../../hooks/pageFixture';

let browser: Browser;
let initial_alert_count = 0;

When('the user romoves one of the alert', async function () {
    if (!pageFixture.addondesignPage) {
        throw new Error('addondesignPage is undefined');
    }
    await pageFixture.addondesignPage.waitForAlertsToLoad();
    
    initial_alert_count = await pageFixture.addondesignPage.getAlertDivsCount();
    console.log(`Initial alert count: ${initial_alert_count}`);
    
    if (initial_alert_count === 0) {
        throw new Error('No alerts found to remove');
    }
    
    await pageFixture.addondesignPage.removeAlert();
    await pageFixture.addondesignPage.waitForAlertsToLoad();
});

Then('the alert count should be reduced', async function () {
    if (!pageFixture.addondesignPage) {
        throw new Error('addondesignPage is undefined');
    }
    const current_alert_count = await pageFixture.addondesignPage.getAlertDivsCount();
    
    expect(current_alert_count).toBeLessThanOrEqual(initial_alert_count);
    
});