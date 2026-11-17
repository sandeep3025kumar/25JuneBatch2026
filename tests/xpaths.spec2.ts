import { test, expect, Locator } from '@playwright/test'

test('xpathPracise', async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/");

    //1.Relative x-path
    let log: Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(log).toBeVisible();

    //contains()
    let products: Locator = page.locator("//h2/a[contains(@href,'computer')]")
    const productsCount: number = await products.count();
    console.log("total product count is  : ", productsCount) //4
    expect(productsCount).toBeGreaterThan(0);
    // console.log(await products.textContent());
    console.log("first content : ",await products.first().textContent());
    console.log("last content : ",await products.last().textContent());
    console.log("nth content : ",await products.nth(2).textContent());

    // 1st -way print all the product titles by using for loop

   let productTitles:string[]= await products.allTextContents()

   for(let pt of productTitles){

    console.log(pt);
   }
   //2nd - way print all the product titles
   console.log("all product titles are:",productTitles)


   // starts-with()
let countlist :Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
let totallistcount : number =await countlist.count();
 expect(totallistcount).toBeGreaterThan(0);

 // text()

 const registerlink :Locator = page.locator("//a[text()='Register']");
 await expect(registerlink).toBeVisible();

 //last()
 const listItems : Locator =page.locator("//div[@class='column follow-us']/ul/li[last()]")
 await expect(listItems).toBeVisible();

 //Position()

 const listPosition : Locator =page.locator("//div[@class='column follow-us']/ul/li[position()=3]")

await expect(listPosition).toBeVisible();


})