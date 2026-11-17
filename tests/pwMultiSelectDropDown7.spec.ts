import { test, expect, Locator } from '@playwright/test'

test('Multi select drop down ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1.Select options from the country dropdown

    //  page.locator('select#colors').selectOption(['Red','Green'])  //visibel text
    //   page.locator('select#colors').selectOption(['red','green','blue'])  // select by value
    // page.locator('select#colors').selectOption([{label :'Green'},{label : 'Red'}]) // select by label
    page.locator('select#colors').selectOption([{ index: 5 },{index:3}])  //selct by index
    await page.waitForTimeout(3000)

    // 2. check the number of options in the drop down
  const dropdownOptions : Locator =  page.locator('#colors>option')
  await expect(dropdownOptions).toHaveCount(7)
   

  //3.Check the options prasent in drop down

 const optionTexts :string[]= (await dropdownOptions.allTextContents()).map(text=>text.trim());
 console.log(optionTexts);
 expect(optionTexts).toContain('Green')

 //4.print options from the drop down

 for(const option of optionTexts){
    console.log(option)
 }

await page.waitForTimeout(3000)


})