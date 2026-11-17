import { test, expect, Locator } from "@playwright/test";

/* test("playwright default methods", async ({ page }) => {

    //navigate to url
   await page.goto("https://demo.nopcommerce.com/");

    //1.getByaltText()  ->it is used for Images
    const logo: Locator = page.getByAltText("Picture for category Electronics");
    await expect(logo).toBeVisible();
})
 */

test("getbyText method",async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //1.getByText()

   const button :Locator= page.getByText("START");
   await button.click();

   //2.getByRole()

   const box : Locator =page.getByRole("textbox", { name:'name'})
   await box.fill("sandeep reddy"); 

   //3.getByLabel

  // await page.getByLabel('Phone:').fill('9440621283')

  //4.getByPlaceHolder

  await page.getByPlaceholder('Enter EMail').fill('sandeepkumar.k@gmail.com')

  //5.getByTtitle
  /* let titlepage :Locator= page.getByTitle('titleValue');
  await expect(titlepage).toBeVisible(); */

  //to get the title

 let pagetitle:string=await page.title();
 console.log("page title is :" , pagetitle)
   








})