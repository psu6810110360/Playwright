import { test, expect } from '@playwright/test';
const PAGE_URL = 'https://wd08.pupasoft.com/login';
test.describe('การทดสอบระบบ Authentication', () => {
  test('test login', async ({ page }) => {
    await page.goto(PAGE_URL);
    await page.getByPlaceholder('example@gmail.com').fill('test@gmail.com');
    await page.getByPlaceholder('********').fill('123456');
    await page.locator('button.login-submit-btn').click();
    await expect(page.locator('.swal2-popup')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.swal2-title')).toHaveText('สำเร็จ!');
  });

  test('test register', async ({ page }) => {
    const uniqueEmail = `test_${Date.now()}@gmail.com`;
    await page.goto(PAGE_URL);
    await page.getByRole('button', { name: 'ลงทะเบียน' }).click();
    await page.getByPlaceholder('ชื่อจริง').fill('สมชาย');
    await page.getByPlaceholder('นามสกุล').fill('เรียนดี');
    await page.getByPlaceholder('08x-xxx-xxxx').fill('0812345678');
    await page.locator('input[name="email"]').fill(uniqueEmail);
    await page.locator('input[name="password"]').fill('password123');
    await page.locator('input[name="confirmPassword"]').fill('password123');
    await page.getByRole('button', { name: 'สร้างบัญชีผู้ใช้' }).click();
    await expect(page.locator('.swal2-popup')).toBeVisible({ timeout: 5000 });
    await expect(page.locator('.swal2-title')).toHaveText('ลงทะเบียนสำเร็จ!');
  });

});