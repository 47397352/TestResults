const { test, expect } = require('@playwright/test');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown')

test("scenarioTwo",async({browserName})=>
{
    const capabilities = require('../config/capabilities');
    const capability = capabilities.find(cap => cap.browserName === browserName);

    if(!capability)
    {
        throw new Error("No Capability is defined with this Browser")
    }

    const browser = await connectToBrowser(capability);
    const page = await browser.newPage();

    await page.goto("https://www.lambdatest.com/selenium-playground")
    await page.click("//a[normalize-space()='Drag & Drop Sliders']")
    await expect(page).toHaveURL(/.*drag-drop-range-sliders-demo/)
    const slider = page.locator("//input[@value='15']")
    const rangeDisplay = page.locator("//output[@id='rangeSuccess']");
    
    for (let i = 0; i < 100; i++) {
        await slider.press('ArrowRight');
        const value = await rangeDisplay.textContent();
        if (value === '95') break;
    }

    const displayedValue = await page.locator("//output[@id='rangeSuccess']").textContent();
    expect(displayedValue.trim()).toBe(95);
})