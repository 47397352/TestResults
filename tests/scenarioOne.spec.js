const { test, expect } = require('@playwright/test');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown')

test("scenario",async({browserName})=>
{
    const capabilities = require('../config/capabilities');
    const capability = capabilities.find(cap => cap.browserName === browserName);

    if(!capability)
    {
        throw new Error("No Capability is defined with this Browser")
    }

    const browser = await connectToBrowser(capability);
    const page = await browser.newPage();
    const welcomeMessage = "Welcome to LambdaTest";

    await page.goto("https://www.lambdatest.com/selenium-playground")
    await page.click("//a[normalize-space()='Simple Form Demo']")
    await expect(page).toHaveURL(/.*simple-form-demo/)
    await page.fill("//input[@id='user-message']",welcomeMessage)
    await page.click("//button[@id='showInput']")
    const displayedMessage = await page.locator("(//div[@id='user-message'])[1]").textContent();
    expect(displayedMessage.trim()).toBe(welcomeMessage);
})