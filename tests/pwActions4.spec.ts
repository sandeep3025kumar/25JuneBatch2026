import { test, expect, Locator } from '@playwright/test'

//input textbox test

test('Actions on textbox', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const textbox: Locator = page.locator("input#name");

    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    //await expect(textbox).toBeDisabled();

    const maxvalue: string | null = await textbox.getAttribute('maxlength');
    expect(maxvalue).toBe('15');

    await textbox.fill("sandeep");
    const enteredtext: string = await textbox.inputValue();
    console.log("expected value is :", enteredtext)
    expect(enteredtext).toBe("sandeep")

    await page.waitForTimeout(5000)
    })


// Radio button test

   test.only('Radio button', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

   const maleRadioButton: Locator = page.locator('')
    await expect(maleRadioButton).toBeVisible();
    await expect(maleRadioButton).toBeEnabled();

    await maleRadioButton.check();

    await expect(maleRadioButton).toBeChecked();
});
