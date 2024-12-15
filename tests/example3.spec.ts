import { test, expect } from "@playwright/test";

test("Search for automation", async ({ page }) => {
  // Navigate to Wiley Online Library
  await page.goto("https://onlinelibrary.wiley.com");

  // Search for automation
  await page.locator('input[name="AllField"]').fill("automation ");
  // Clisk on search button
  await page.locator('button[aria-label="Submit Search"]').click();

  //  verify result page
  await expect(page).toHaveURL(
    "https://onlinelibrary.wiley.com/action/doSearch?AllField=automation"
  );
});
