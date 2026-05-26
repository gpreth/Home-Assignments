import { test, webkit } from "@playwright/test";
test("flipkart", async () => {

    // Launch the browser
    const browser = await webkit.launch({ headless: false });

    // Launch the window
    const context = await browser.newContext();

    // Launch the page
    const page = await context.newPage();

    // Load the URL
    await page.goto("https://www.flipkart.com/");

    // Print current URL
    console.log("The current URL is: " + page.url());

    // Print page title
    const pageTitle = await page.title();
    console.log("The Page Title is: " + pageTitle);

    // Close browser
    await browser.close();
});

// using Page Fixtures
import { test, webkit } from '@playwright/test';

test('flipkart', async ({ page }) => {

    // Load the URL
    await page.goto('https://www.flipkart.com/');

    // Print current URL
    console.log('The current URL is: ' + page.url());

    // Print page title
    const pageTitle = await page.title();
    console.log('The Page Title is: ' + pageTitle);

});