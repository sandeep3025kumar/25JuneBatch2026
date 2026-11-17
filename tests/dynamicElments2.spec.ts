import { test, expect, Locator } from "@playwright/test"

test("hadling dynamic elements", async ({ page }) => {

    page.goto("https://testautomationpractice.blogspot.com/")

    /* //const element :Locator = page.locator("//button[text() ='START' or text()='STOP']")
    //const element :Locator = page.locator("//button[contains(@name,'st')]")
    for (let i = 1; i <= 5; i++) {
        const element: Locator = page.locator("//button[starts-with(@name,'st')]")
        await element.click()
        await page.waitForTimeout(2000)
    }
    */

    //Using getByRole()

    const button = page.getByRole('button' ,{name : /START | STOP/})
    button.click();
})