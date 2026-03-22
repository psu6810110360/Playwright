import { test, expect } from '@playwright/test';

test.describe('การทดสอบระบบสั่งซื้อคอร์สเรียน', () => {
  
  test('TC-01: ทดสอบการเพิ่มคอร์สลงตะกร้าและยืนยันการชำระเงิน', async ({ page }) => {

    await page.goto('https://wd08.pupasoft.com/login');
    await page.getByPlaceholder('example@gmail.com').fill('test@gmail.com'); 
    await page.getByPlaceholder('********').fill('123456');
    await page.locator('button.login-submit-btn').click();
    await page.waitForTimeout(3000); 
    await page.goto('https://wd08.pupasoft.com/courses');
    await page.getByText('รายละเอียดคอร์ส').first().click();
    await page.getByText('เพิ่มลงตะกร้า').first().click();
    await page.waitForTimeout(2000); 
    await page.goto('https://wd08.pupasoft.com/cart'); 
    await page.getByText('ไปสู่การชำระเงิน').first().click();
    await page.waitForTimeout(2000);
    await page.locator('input[type="file"]').setInputFiles({
      name: 'mock-slip.jpg',
      mimeType: 'image/jpeg',
      buffer: Buffer.from('fake-image-data-for-testing') 
    });

    await page.getByText('ยืนยันการโอนเงิน').first().click();
    await expect(page.locator('.swal2-popup')).toBeVisible({ timeout: 5000 });
  });

});