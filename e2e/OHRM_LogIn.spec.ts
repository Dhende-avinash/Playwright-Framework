import { test, expect } from '@playwright/test';

test('GitHub title test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  const titleName = await page.title();
  console.log(titleName);
  expect(titleName).toBe('OrangeHRM');
});