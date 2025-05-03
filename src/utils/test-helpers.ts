import { test as base, Page } from '@playwright/test';

// Custom test fixture type with authentication
export type TestOptions = {
  loggedInPage: Page;
  authenticatedApiContext: any;
};

// Extend the base test with custom fixtures
export const test = base.extend<TestOptions>({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await use(page);
  },
  authenticatedApiContext: async ({ request }, use) => {
    const context = await request.newContext({
      baseURL: 'https://www.saucedemo.com',
      extraHTTPHeaders: {
        'Accept': 'application/json',
      }
    });
    await use(context);
  },
});

// Performance testing helper functions
export const measurePerformance = async (page: Page) => {
  const performanceTimings = await page.evaluate(() => JSON.stringify(window.performance.timing));
  return JSON.parse(performanceTimings);
};

export { expect } from '@playwright/test';
