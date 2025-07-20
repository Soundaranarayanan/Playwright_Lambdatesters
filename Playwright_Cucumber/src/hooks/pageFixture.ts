

// import { Page } from '@playwright/test';
// import { Logger} from 'winston';
// export const pageFixture = {
//   page: undefined as Page | undefined,
  
//   logger: undefined as Logger | undefined
// };

import { Page } from '@playwright/test';
import { Logger } from 'winston'; // or whatever logger you're using
import HeaderPage from '../pages/HeaderPage';
import RegisterPage from '../pages/registerPage';

interface PageFixture {
    page: Page | undefined;
    logger: Logger | undefined;
    headerPage: HeaderPage | undefined;  // Add this
    registerPage: RegisterPage | undefined;  // Add this
}

export const pageFixture: PageFixture = {
    page: undefined,
    logger: undefined,
    headerPage: undefined,
    registerPage: undefined
};