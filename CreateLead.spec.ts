//Page Fixture
import test from "@playwright/test"
test("createlead" , async ({ page }) => {
// 1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
await page.goto("https://leaftaps.com/opentaps/control/main")
// 2. Enter the username as Demosalesmanager
await page.locator('#username').fill('democsr')
// 3. Enter the password as crmsfa
await page.locator('#password').fill('crmsfa')
// 4. Click the Login button
await page.locator('.decorativeSubmit').click()
// 5. Click CRM/SFA
await page.locator(`text='CRM/SFA'`).click()
// 6. Click Leads
await page.locator(`text='Leads'`).click()
// 7. Click Create Lead
await page.locator(`text='Create Lead'`).click()
// 8. Fill the Company Name.fill('Amazon'))
await page.locator("[id='createLeadForm_companyName']").fill('Amazon')
// 9. Fill the First Name
await page.locator("[id='createLeadForm_firstName']").fill('Preethi')
// 10. Fill the Last Name
await page.locator("[id='createLeadForm_lastName']").fill('Babu')
// 11. Fill the Salutation
await page.locator("[id='createLeadForm_personalTitle']").fill('Mrs')
// 12. Fill the Title
await page.locator("[id='createLeadForm_generalProfTitle']").fill('Tester')
// 13. Fill the Annual Revenue
await page.locator("[id='createLeadForm_annualRevenue']").fill('100000')
// 14. Fill the Department
await page.locator("[id='createLeadForm_departmentName']").fill('Software')
// 15. Fill the Phone Number
await page.locator("[id='createLeadForm_primaryPhoneNumber']").fill('Mrs')
// 16. Click Create Lead button
await page.locator("[class='smallSubmit']").click()
})
