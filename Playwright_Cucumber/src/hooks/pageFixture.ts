

// import { Page } from '@playwright/test';
// import { Logger} from 'winston';
// export const pageFixture = {
//   page: undefined as Page | undefined,
  
//   logger: undefined as Logger | undefined
// };

import { Page } from '@playwright/test';
import { Logger } from 'winston'; 
import HeaderPage from '../pages/HeaderPage';
import RegisterPage from '../pages/registerPage';
import ProductComaprePage from '../pages/productComparePage';
import AddOnDesignPage from '../pages/addonDesignPage';
import HomePage from '../pages/homePage';
import CheckoutPage from '../pages/checkOutPage';

interface PageFixture {
    page: Page | undefined;
    logger: Logger | undefined;
    headerPage: HeaderPage | undefined;  // Add this
    registerPage: RegisterPage | undefined;  // Add this
    productComparePage: ProductComaprePage | undefined;
    addondesignPage: AddOnDesignPage | undefined;
    homePage: HomePage | undefined;
    checkoutPage: CheckoutPage | undefined;
}

export const pageFixture: PageFixture = {
    page: undefined,
    logger: undefined,
    headerPage: undefined,
    registerPage: undefined,
    productComparePage: undefined,
    addondesignPage: undefined,
    homePage: undefined,
    checkoutPage: undefined
};