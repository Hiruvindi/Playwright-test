import { test, expect } from "@playwright/test";

test("get started link", async ({ page }) => {
  // Test script not work properly due to cloudfare human verifications :(

  // Go to the web page
  await page.goto("https://onlinelibrary.wiley.com/", {
    waitUntil: "load",
  });

  // Click on the login button
  await page.locator("#indivLogin").click({ delay: 1000 });

  // Click on first <ul> <li> <a> tag which contains the induvidual login
  await page.locator("ul li a").first().click({ delay: 1000 });

  // Check if the URL is correct
  await expect(page).toHaveURL("https://wiley.scienceconnect.io/login");

  // Fill the email input field
  await page.locator("input[name='email']").fill("hiruvindi2000@gmail.com");

  // Press enter key
  await page.keyboard.press("Enter");

  // Fill the password input field
  await page.locator("input[name='password']").fill("1qaz2wsx#@A");

  // Press enter key
  await page.keyboard.press("Enter");
});
