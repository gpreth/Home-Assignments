import test from "@playwright/test"
test("locaters" , async ({page}) =>{
    // Assignment: 1 Create Lead 
// 1.	Login to https://login.salesforce.com 
await page.goto("https://login.salesforce.com")
await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
await page.locator("[name='pw']").fill("TestLeaf@2025")
await page.locator("[name='Login']").click()
// 2.	Click on toggle menu button from the left corner 
await page.locator("//div[@class='slds-icon-waffle']").click()
// 3.	Click view All and click Sales from App Launcher 
await page.locator("//button[@class='slds-button']").click()
await page.locator("//p[text()='Sales']").click();
// // 4.	Click on Leads tab  
await page.locator("//span[text()='Leads']").click()
// 5.	Click on New button 
await page.locator("//div[text()='New']").click()
// 6.	Select Salutation dropdown 
await page.click('//button[@name="salutation"]');
await page.click('//span[text()="Mr."]');

// 7.	Enter the Last Name 
// 8.	Enter the Company Name  
await page.fill('//input[@name="lastName"]', 'Preethi');
await page.fill('//input[@name="Company"]', 'Amazon');

// 9.	Click Save and Verify Leads name created 
     await page.click('//button[@name="SaveEdit"]');

// Assignment: 2 Edit Lead http://leaftaps.com/opentaps/control/main 	 	 	 
// 1.	Launch the browser 
// 2.	Enter the username 
// 3.	Enter the password 
// 4.	Click Login 
// 5.	Click CRM/SFA link 
// 6.	Click Leads link 
// 7.	Click on Create Lead 
// 8.	Enter company name 
// 9.	Enter first name 
// 10.Enter last name 
// 11.Click on Create Lead button   
// 12.Click Edit 
// 13.Change the company name 
// 14.Click Update  	 	   

import { test, expect } from '@playwright/test';

test('Edit Lead - basic selectors', async ({ page }) => {

    await page.goto('http://leaftaps.com/opentaps/control/main');

    // CSS
    await page.fill('#username', 'DemoSalesManager');
    await page.fill('#password', 'crmsfa');
    await page.click('.decorativeSubmit');

    // XPath
    await page.click('//a[text()="CRM/SFA"]');
    await page.click('//a[text()="Leads"]');
    await page.click('//a[text()="Create Lead"]');

    // XPath inputs
    await page.fill('//input[@id="createLeadForm_companyName"]', 'TestLeaf');
    await page.fill('//input[@id="createLeadForm_firstName"]', 'Hari');
    await page.fill('//input[@id="createLeadForm_lastName"]', 'Prasad');

    await page.click('//input[@value="Create Lead"]');

    await page.click('//a[text()="Edit"]');

    await page.fill('//input[@id="updateLeadForm_companyName"]', 'UpdatedCompany');

    await page.click('//input[@value="Update"]');

    const company = page.locator('//span[@id="viewLead_companyName_sp"]');
    await expect(company).toContainText('UpdatedCompany');
});
 
// Assignment: 3 Create Individuals Test Steps:  
// 1.	Login to https://login.salesforce.com 
// 2.	Click on the toggle menu button from the left corner 
// 3.	Click View All and click Individuals from App Launcher 
// 4.	Click on the Dropdown icon in the Individuals tab 
// 5.	Click on New Individual 
// 6.	Enter the Last Name 
// 7.	Click save and verify Individuals Name 
 import { test, expect } from '@playwright/test';

test('Create Individual - basic selectors', async ({ page }) => {

    await page.goto('https://login.salesforce.com/');

    // CSS login
    await page.fill('#username', 'your_username');
    await page.fill('#password', 'your_password');
    await page.click('#Login');

    // XPath navigation
    await page.click('//div[@class="slds-icon-waffle"]');
    await page.click('//button[text()="View All"]');

    await page.click('//p[text()="Individuals"]');
    await page.click('//div[text()="New"]');

    // XPath
    await page.fill('//input[@name="lastName"]', 'Raj');

    await page.click('//button[@name="SaveEdit"]');

    const name = page.locator('//slot[@name="primaryField"]');
    await expect(name).toContainText('Raj');
});

// Assignment: 4 Edit Individuals Test Steps: 
// 1.	Login to https://login.salesforce.com 
// 2.	Click on the toggle menu button from the left corner 
// 3.	Click View All and click Individuals from App Launcher  
// 4.	Click on the Individuals tab  
// 5.	Search the Individuals last name 
// 6.	Click on the Dropdown icon and Select Edit 
// 7.	Select Salutation as 'Mr' 
// 8.	Now enter the first name 
// 9.	Click on Save and Verify the first name  

import { test, expect } from '@playwright/test';

test('Edit Individual - basic selectors', async ({ page }) => {

    await page.goto('https://login.salesforce.com/');

    // CSS
    await page.fill('#username', 'your_username');
    await page.fill('#password', 'your_password');
    await page.click('#Login');

    // XPath navigation
    await page.click('//div[@class="slds-icon-waffle"]');
    await page.click('//button[text()="View All"]');
    await page.click('//p[text()="Individuals"]');

    // Search
    await page.fill('//input[@name="Individual-search-input"]', 'Raj');
    await page.keyboard.press('Enter');

    // Edit
    await page.click('//a[@title="Edit"]');

    // XPath dropdown + input
    await page.click('//button[@name="salutation"]');
    await page.click('//span[text()="Mr."]');

    await page.fill('//input[@name="firstName"]', 'Arun');

    await page.click('//button[@name="SaveEdit"]');

    const name = page.locator('//slot[@name="primaryField"]');
    await expect(name).toContainText('Arun');
});



























































})
