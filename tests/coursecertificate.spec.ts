import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://wd08.pupasoft.com/');
  await page.getByRole('link', { name: 'SmartSciencePro' }).click();
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'example@gmail.com' }).click();
  await page.getByRole('textbox', { name: 'example@gmail.com' }).fill('0@gmail.com');
  await page.getByRole('textbox', { name: '********' }).click();
  await page.getByRole('textbox', { name: '********' }).fill('123456');
  await page.locator('form').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'SmartSciencePro' }).click();
  await page.getByRole('button', { name: 'เข้าสู่ห้องเรียน' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'ดาวน์โหลดใบประกาศ' }).click();
  const download = await downloadPromise;
  await page.getByRole('button', { name: 'OK' }).click();
});