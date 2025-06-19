// @ts-check
import { test, expect } from '@playwright/test';

test('Create new user and verify user created successfully', async ({ page }) => 
  {
  await page.goto('https://freelance-learn-automation.vercel.app/');


  await expect(page).toHaveTitle(/Automation/);

  await page.locator("//img[@alt='menu']").click();

  await page.locator("//button[normalize-space()='Log in']").click();

  await expect(page).toHaveURL(/login/);

  await page.locator("//a[normalize-space()='New user? Signup']").click();

  
  const signUpButton = page.locator("//button[normalize-space()='Sign up']");

  await expect(signUpButton).toBeDisabled();


  await page.locator("//input[@placeholder='Name']").fill('Mukesh Otwani');

  
  await page.locator("//input[@placeholder='Email']").fill(`mukesh-${Date.now()}@example.com`);

  await page.locator("//input[@placeholder='Password']").fill('Mukesh@1234');


  await page.locator("//label[normalize-space()='Testing']").click();

  await page.locator("//input[@value='Male']").click();

 
  await page.locator("//select[@id='state']").selectOption({ label: 'Madhya Pradesh' });

 
  await page.locator("//select[@id='hobbies']").selectOption(['Reading', 'Playing', 'Swimming']);

 
  await expect(signUpButton).toBeEnabled();

  await signUpButton.click();
  

  await expect(page.locator("//p[normalize-space()='Signup successfully, Please login!']")).not.toBeVisible({ timeout: 5000 });
 

});

