// 1. Launch the browser.
// 2. Navigate to https://www.pvrcinemas.com/.
import test, { expect } from "@playwright/test"
test ("cinema" , async({page}) =>{
await page.goto("https://www.pvrcinemas.com/")
// 3. Select the required city.
await page.locator("(//div[@class='cities-overlay cities-active'])[6]").click()
// 4. Click on the Cinema option.
await page.locator("(//span[text()='Cinema'])").click()
// 5. Click on Select Cinema dropdown.
await page.locator("(//span[text()='Select Cinema'])").click()
// 6. Select any available cinema from the list.
await page.locator("(//li[@class='p-dropdown-item']/span)[1]").click()
// 7. Select any available date (Today/Tomorrow/Upcoming).
await page.locator("(//li[@class='p-dropdown-item'])[1]").click()
// 8. Select any available movie from the movie list.
await page.locator("(//li[@class='p-dropdown-item'])[5]").click()
// 9. Select any available show time.
await page.locator("(//span[text()='07:10 PM'])").click()
// 10. Click on the Submit button.
await page.getByLabel("Submit").click()
// 11. Accept the consent/cookie popup if displayed.
// 12. Accept any additional confirmation popup if displayed
page.on("dialog" , async(handlealert)  =>{
    const type=awaurhandlealert.type()
    const ok= handlealert.accept()
    const msg=handlealert.message()
    if (msg ==="Terms & Conditions"){
        await handlealert.accept()
    }
})
page.waitForTimeout(3000)
await page.getByRole("button" , {name:"Accept"}).click()
page.waitForTimeout(3000)
// 13. Select any available seat from the seating layout.
const seat =await page.locator("(//td[@class='seats-col']/span)[102]").click()
// 14. Verify the selected seat information is displayed.
console.log("The selected seat is :"+seat)
page.waitForTimeout(8000)
// // 15. Verify the total ticket amount is displayed.
// const amount = await expect (page.getByText("Grand Total")).
//  console .log("The Total Ticket amount :" +amount)
// // 16. Verify the page title is displayed correctly.
// console.log("Page Title:", await page.title());
// // 17. Click on the Proceed button.
// await page.getByRole("button", {name :"Proceed"}).click()
})
