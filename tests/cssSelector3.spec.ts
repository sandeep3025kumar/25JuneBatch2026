import { test, expect, Locator } from '@playwright/test'

test("css selectors verification", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

   /*  //1st way with id 
    await expect(page.locator("input#small-searchterms")).toBeVisible();
    await page.locator("input#small-searchterms").fill("T-shirts");
 
    //2nd way with class
    await page.locator("input.search-box-text").fill("t-shirt");
    

    // 3rd way tagname with attribute value

    await page.locator("input[name='q']").fill("T-shirts");


   // 4th way tag with class and attribute to have multiple elements ,then filter with uniq value
   await page.locator("input.search-box-text[value='Search store']").fill("T-shirts");
*/

  // starts-with (^)
 await page.locator("input[class^='search']").fill('T-shirts');

  // ends-with($)
await page.locator("input[value$='store']").fill('t-shirts');

  //contains (*)  substring

await page.locator("input[value*='tor']").fill('t-shirts');

//:not  it reprasents or operator

await page.locator("input[id='small-searchterms']:not([value='Searchtore'])").fill('t-shirts');

//+p immidiate siblings  +* immidiate siblings

})
