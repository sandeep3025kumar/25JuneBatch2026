import { test, expect, Locator } from '@playwright/test'

test('Single select drop down ', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // 1.Select options from the country dropdown

    //  page.locator('select#country').selectOption('Canada')  //visibel text
    //   page.locator('select#country').selectOption({value : 'uk'})  // select by value
    // page.locator('select#country').selectOption({label :'France'}) // select by label
    page.locator('select#country').selectOption({ index: 5 })  //selct by index
    await page.waitForTimeout(3000)

    // 2. check the number of options in the drop down
  const dropdownOptions : Locator =  page.locator('select#country>option')
  await expect(dropdownOptions).toHaveCount(10)
   

  //3.Check the options prasent in drop down

 const optionTexts :string[]= (await dropdownOptions.allTextContents()).map(text=>text.trim());
 console.log(optionTexts);
 expect(optionTexts).toContain('Japan')

 //4.print options from the drop down

 for(const option of optionTexts){
    console.log(option)
 }




})