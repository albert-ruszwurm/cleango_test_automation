import { test, expect } from '@playwright/test';
import { generateRandomPhoneNumber } from '../helpers/randomPhonenumber';
import randomEmail from 'random-email';

let testEmail : string;
let testPhoneNumber : string;

test.beforeEach(async ({ page }) => {
  await page.goto('https://cleango.hu/');
  testEmail = randomEmail()
  testPhoneNumber = generateRandomPhoneNumber();
});


test('Verify registering a new account', async ({ page }) => {
  await page.getByPlaceholder('info@cleango.hu').click();
  await page.getByPlaceholder('info@cleango.hu').fill(testEmail);
  await page.getByPlaceholder('+').click();
  await page.getByPlaceholder('+').fill(testPhoneNumber);
  await page.getByRole('button', { name: 'Regisztrálok' }).click();
  await expect(page).toHaveURL("https://cleango.hu/thank-you");
  await expect(page.locator('h1')).toContainText('Sikeres regisztráció!');
});
