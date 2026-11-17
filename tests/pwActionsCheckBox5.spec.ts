import { test, expect, Locator } from "@playwright/test"

test("CheckBox Validation", async ({ page }) => {

  //1.Select sunday checkbox
  await page.goto("https://testautomationpractice.blogspot.com/");
  const sundayCheckbox: Locator = page.getByLabel('Sunday');
  //  await sundayCheckbox.check();
  await expect(sundayCheckbox).not.toBeChecked();

  await page.waitForTimeout(3000);

  //2.Select all checkboxes ans assert each checkbox

  const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const checkboxes: Locator[] = days.map(index => page.getByLabel(index))
  expect(checkboxes.length).toBe(7)

 /*  for (const checkbox of checkboxes) {

    checkbox.check();
    await expect(checkbox).toBeChecked();

  }

  //3. unselect last 3 checkboxes

  for (const checkbox of checkboxes.slice(-3)) {

    await checkbox.uncheck();
    expect(checkbox).not.toBeChecked()
    await page.waitForTimeout(3000);
  }

  // 4.if checkboxes are checked ,uncheck , and if check boxes are unchecked check it

  for (const checkbox of checkboxes) {
    if (await checkbox.isChecked()) {
      //if checked uncheck
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();

    }
    else {

      await checkbox.check();
      await expect(checkbox).toBeChecked();

    }

   // await page.waitForTimeout(3000)

  }
 */
  //5.Select only friday checkbox

  const weekday='Friday';
  for(const label of days){

    if(label===weekday){

     const checkbox = page.getByLabel(label)
     checkbox.check();
     await expect(checkbox).toBeChecked();
     await page.waitForTimeout(3000);

    }
  }


});