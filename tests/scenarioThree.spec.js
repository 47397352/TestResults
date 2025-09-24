const { test, expect } = require('@playwright/test');
const { connectToBrowser } = require('../utils/setup');
const { teardown } = require('../utils/teardown')

test("scenarioThree",async({browserName})=>
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
    await page.click("//a[normalize-space()='Input Form Submit']")
    await page.click("//button[normalize-space()='Submit']")
    const errorVisible = await page.isVisible("text=Please fill in the fields")
    console.assert(errorVisible, 'Error message is found');
    
    await page.fill("//input[@id='name']", 'Lambdatest');
    await page.fill("//input[@id='email']", 'lamdatest@example.com');
    await page.fill("//input[@id='password']", 'SecurePass123');
    await page.fill("//input[@id='company']", 'TechCorp');
    await page.fill("//input[@id='website']", 'https://techcorp.com');
    await page.selectOption("//select[@name='country']", { label: 'United States' });
    await page.fill("//input[@id='city']", 'willoughby');
    await page.fill("//input[@id='address1']", '123 Main St');
    await page.fill("//input[@id='address2']", 'Suite 400');
    await page.fill("//input[@id='state']", 'Ohio');
    await page.fill("//input[@id='state']", '44094');

    await page.click("//button[normalize-space()='Submit']")
    const formSubmission = await page.isVisible("text=Thanks for contacting us, we will get back to you shortly")
    console.assert(formSubmission, 'Submission message is found');
})