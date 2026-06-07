import { test, expect } from '@playwright/test';

test('Search product, apply filters, add to cart in Decathlon', async ({ page }) => {

  // Navigate to Decathlon
  await page.goto('https://www.decathlon.in/');

  // Verify home page
  await expect(page).toHaveURL(/decathlon\.in/);

  // Search for shoes
  await page.locator('input[type="search"]').fill('shoes');
  await page.keyboard.press('Enter');

  // Print page title
  const title = await page.title();
  console.log('Page Title:', title);

  // Verify title contains shoes
  await expect(page).toHaveTitle(/shoes/i);

  // Apply filters
  await page.getByText('Running').click();
  await page.getByText('Men').click();
  await page.getByText('UK 10.5').click();

  // Sort High to Low
  await page.getByText('Sort').click();
  await page.getByText('Price: High to Low').click();

  // Click first product
  await page.locator('a').first().click();

  // Select shoe size
  await page.getByText('UK 10.5 - EU 45').click();

  // Add to cart
  await page.getByRole('button', { name: /add to cart/i }).click();

  // Open cart
  await page.goto('https://www.decathlon.in/cart');

  // Get total amount
  const totalAmount = await page.locator('body').textContent();

  console.log('Total Cart Amount:', totalAmount);
});