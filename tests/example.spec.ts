import { test, expect } from '@playwright/test';

test('Heading visible', async ({ page }) => {
  await page.goto('http://localhost:3000/issues');

  // Expect a title to be visible i.e. no DOMMatrix error
  await expect(page.getByRole('heading', { name: 'Issues' })).toBeVisible();
});