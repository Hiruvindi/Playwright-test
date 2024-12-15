import { test, expect } from "@playwright/test";

test("get started link", async ({ page }) => {
  await page.goto("https://onlinelibrary.wiley.com/", {
    waitUntil: "load",
  });

  // Click the get started link.
  await page.locator("#indivLogin").click({ delay: 1000 });

  // Click on first <ul> <li> tag
  await page.locator("ul li a").first().click({ delay: 1000 });

  await expect(page).toHaveURL("https://wiley.scienceconnect.io/login");

  await page.locator("input[name='email']").fill("hiruvindi2000@gmail.com");

  await page.keyboard.press("Enter");
});
