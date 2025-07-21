import {
  BeforeAll,
  Before,
  After,
  AfterAll,
  setDefaultTimeout,
  Status,
} from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { createLogger } from 'winston';
import { options } from '../helper/util/logger';
import { pageFixture } from './pageFixture';
import { getEnv } from '../helper/env/env';
import { invokeBrowser } from '../helper/browsers/browserManager';
import HeaderPage from '../pages/HeaderPage';
import RegisterPage from '../pages/registerPage';
import ProductComaprePage from '../pages/productComparePage';
import AddOnDesignPage from '../pages/addonDesignPage';
import HomePage from '../pages/homePage';
import CheckoutPage from '../pages/checkOutPage';
import MyOrderPage from '../pages/myOrderPage';
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(60 * 1000);

BeforeAll(async function () {
  getEnv();
  browser = await invokeBrowser();

});


Before(   async function ({pickle}) {
  
browser = await chromium.launch({ headless: false }); // or true
  const scenarioName = pickle.name + pickle.id;
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
  pageFixture.logger = createLogger(options(scenarioName));
  
  // Initialize page objects
  pageFixture.headerPage = new HeaderPage(page);
  pageFixture.registerPage = new RegisterPage(page);
  pageFixture.productComparePage=new ProductComaprePage(page);
  pageFixture.addondesignPage=new AddOnDesignPage(page);
  pageFixture.homePage=new HomePage(page);
  pageFixture.checkoutPage=new CheckoutPage(page);
  pageFixture.myorderPage=new MyOrderPage(page);

});

After(async function ({pickle,result}) {
    console.log(result?.status);
    if (result?.status == Status.FAILED && pageFixture.page) {
      const screenshot = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type: 'png'});
      this.attach(screenshot, 'image/png');
    }
    if (pageFixture.page) {
      await pageFixture.page.close();
    }
    await context.close();
    await pageFixture.logger?.close();
    
    // Clean up page objects
    pageFixture.headerPage = undefined;
    pageFixture.registerPage = undefined;
    pageFixture.productComparePage =undefined;
    pageFixture.addondesignPage = undefined;
  });

AfterAll(async function () {
  await browser.close();
});