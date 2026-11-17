import { test, expect, Locator } from '@playwright/test'
test('Sorted order dropDown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    // const dropdownOptions: Locator = page.locator("#animals>option")
    const dropdownOptions: Locator = page.locator('#colors>option')
    //expect(dropdownOptions).toHaveCount(10)

    const optionsText: string[] = (await dropdownOptions.allTextContents()).map(text => text.trim())
    console.log(optionsText)
   // expect(optionsText).toContain('Cat')

    const originalList: string[] = optionsText;
    const sortedList: string[] = optionsText.sort();

    console.log("original list is", originalList)
    console.log("Sorted list is", sortedList)





})