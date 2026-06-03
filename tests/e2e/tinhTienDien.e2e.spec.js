import { test, expect } from "@playwright/test";

test.describe("Kiểm thử chức năng tính tiền điện", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tinh-tien-dien.html");
  });

  test("TC-E2E-001: Hiển thị kết quả đúng là 100 kwh", async ({ page }) => {
    await page.fill("#kwh-input", "100");
    await page.click("#calculate-button");

    const message = page.locator("#calculation-message");
    await expect(message).toHaveText(" Số tiền phải trả là 190000");
  });

  test("TC-E2E-002: Hiển thị kết quả đúng khi nhập 50 kwh", async ({ page }) => {
    await page.fill("#kwh-input", "50");
    await page.click("#calculate-button");

    const message = page.locator("#calculation-message");
    await expect(message).toHaveText(" Số tiền phải trả là 90000");
  });

  test("TC-E2E-003: Hiển thị thông báo lỗi khi để trống", async ({ page }) => {
    await page.fill("#kwh-input", "");
    await page.click("#calculate-button");

    const message = page.locator("#calculation-message");
    await expect(message).toHaveText("Vui lòng nhập số KWH");
  });
});