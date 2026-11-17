import { test, expect, Locator } from "@playwright/test"

test("Verify playwright locators", async ({ page }) => {

    /*  //open the url
     await page.goto("https://demo.nopcommerce.com/");
 
 
     console.log("=====get title======");
     let title: string = await page.title();
     console.log("title is :", title);
 
     //1.getByAltText()
 
     const logo: Locator = page.getByAltText('nopCommerce demo store')
     await expect(logo).toBeVisible();
 
     //2.getbyText()
 
     const text: Locator = page.getByText('Welcome to our store')
     await expect(text).toBeVisible();
  */
    // await expect(page.getByText('Welcome to our store')).toBeVisible();

    //Open url
    await page.goto("https://testautomationpractice.blogspot.com/");


    //2.getByText();

    const text1: Locator = page.getByText("For Selenium, Cypress & Playwright")
    await expect(text1).toBeVisible();
    console.log("getByText1 done");


    //3.getByRole()

    let box: Locator = page.getByRole("checkbox", { name: 'sunday' })
    await box.scrollIntoViewIfNeeded();
    await box.click();
    console.log("getByRole checkbox done");

   // await page.locator("#PageList1").getByRole("link", { name: 'Home' }).click();
   // console.log("role by link is clicked");

    //4.getBylabel

   // await page.getByLabel('Name:').fill("ramana");

   //5.getByPlaceholder
   await page.getByPlaceholder("Enter Name").fill("lavanya");
   console.log("getByPlaceholder done");

   //6.getByTitle

 //  const titledemo :Locator=page.getByTitle("titleValue");
 //  await expect(titledemo).toBeVisible();

 //7.getByTestId
 
})