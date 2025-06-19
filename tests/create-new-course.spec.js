// @ts-check
import { test, expect } from '@playwright/test';

test('Create new user and verify user created successfully', async ({ page }) => 
  {
 
    await page.goto('https://freelance-learn-automation.vercel.app/login');

    await page.locator("//input[@placeholder='Enter Email']").fill("admin@email.com")

    await page.getByPlaceholder("Enter Password").fill("admin@123");

    await page.locator("//button[normalize-space()='Sign in']").click();

    // verify text contains welcome with below locators
    const welcomeText = await page.locator('.welcomeMessage').textContent();

    expect(welcomeText).toContain('Welcome');
    

    // mouse hover on <img src="/static/media/burger-menu.93a4e66d6d393af53ac4ed46e5193397.svg" alt="menu" xpath="1">
    await page.locator("//span[normalize-space()='Manage']").hover();

    await page.locator("//a[normalize-space()='Manage Courses']").click();

    await page.locator("//button[normalize-space()='Add New Course']").click();

    // upload file for below locator //input[@type='file'] and upload a file from desktop
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("//input[@type='file']").click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('testdata/SampleImage.png');
    
    const coursename = `Course ${Date.now()}`;

    await page.locator("//input[@id='name']").fill(coursename);

    await page.locator("//div[@class='modal-body']//textarea").fill('This is a test course description.');

    // type for locator id instructorNameId and enter Mukesh Otwani as instructor name
    await page.locator("#instructorNameId").fill('Mukesh Otwani');

    // type for id price and enter 1000
    await page.locator("#price").fill('1000');

    await page.locator("//div[normalize-space()='Select Category']").click();
    
    await page.locator("//button[normalize-space()='Testing']").click();

    await page.locator("//button[normalize-space()='Save']").click();

    await page.waitForTimeout(2000);

    // verify course created successfully
    await expect(page.locator(`//td[normalize-space()='${coursename}']`)).toBeVisible({ timeout: 5000 });

    await page.locator(`//td[normalize-space()='${coursename}']//following::button[1]`).click();

    // verify course deleted successfully
    await expect(page.locator(`//td[normalize-space()='${coursename}']`)).not.toBeVisible({ timeout: 5000 });

    await page.waitForTimeout(2000);

    await page.locator("//img[@alt='menu']").click();

    await page.locator("//button[normalize-space()='Sign out']").click();

    // verify url contains login as url after sign out
    await expect(page).toHaveURL(/login/);



});

