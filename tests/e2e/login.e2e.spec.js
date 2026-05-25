import { test, expect } from '@playwright/test'
// Mô tả test plan
test.describe('Kiểm thử chức năng đăng nhập E2E', () => {
    // test case 1
    test('hiển thị thông báo lỗi khi bỏ trống email', async ({ page }) => {
        await page.goto('/');
        await page.fill('#password-input', '123456');
        await page.click('#login-button');

        const loginMessage = page.locator('#login-message');
        await expect(loginMessage).toHaveText('Email không hợp lệ.');
});
});    