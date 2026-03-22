import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://wd08.pupasoft.com/');
    await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('textbox', { name: 'example@gmail.com' }).click();
    await page.getByRole('textbox', { name: 'example@gmail.com' }).fill('admin@test.com');
    await page.getByRole('textbox', { name: '********' }).click();
    await page.getByRole('textbox', { name: '********' }).fill('1234');
    await page.getByRole('textbox', { name: '********' }).press('Enter');
    await page.locator('form').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'เพิ่มคอร์สเรียนใหม่' }).click();
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('Good');
    await page.locator('input[name="originalPrice"]').click();
    await page.locator('input[name="originalPrice"]').fill('122');
    await page.locator('input[name="title"]').click();
    await page.locator('input[name="title"]').fill('Good(playwright)');
    await page.getByRole('textbox', { name: 'ชื่อครูคนที่' }).click();
    await page.getByRole('textbox', { name: 'ชื่อครูคนที่' }).fill('test');
    await page.getByRole('checkbox', { name: 'ม.4' }).check();
    await page.getByPlaceholder('เช่น 30').click();
    await page.getByPlaceholder('เช่น 30').fill('121');
    await page.getByPlaceholder('วัน').click();
    await page.getByPlaceholder('วัน').fill('22');
    await page.getByRole('button', { name: 'บันทึกข้อมูล' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
});