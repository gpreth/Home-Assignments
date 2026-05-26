import { test, chromium } from "@playwright/test";

test("bus", async () => {

    // Launch the browser
    const browser = await chromium.launch({ headless: false });

    // Launch the window
    const context = await browser.newContext();

    // Launch the page
    const page = await context.newPage();

    // Load the URL
    await page.goto("https://www.redbus.in/");

    // Print current URL
    console.log("The current URL is: " + page.url());

    // Print page title
    const pageTitle = await page.title();
    console.log("The Page Title is: " + pageTitle);

    // Close browser
    await browser.close();
});

//using Page Fixture
import { test, chromium } from "@playwright/test";
test("bus", async () => {
    // Load the URL
    await page.goto("https://www.redbus.in/");

    // Print current URL
    console.log("The current URL is: " + page.url());

    // Print page title
    const pageTitle = await page.title();
    console.log("The Page Title is: " + pageTitle);

    // Close browser
    await browser.close();
});

