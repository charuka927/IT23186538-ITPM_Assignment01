import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Pos_UI_0001",
    name: "Verify UI accepts short valid Singlish input",
    input: "budhu saraNayi",
    expected: "බුදු සරණයි",
  },
  {
    id: "Pos_UI_0002",
    name: "Verify UI handles medium-length valid input",
    input: "oyaata kohomadha kiyala dhaenaganna puluvandha",
    expected: "ඔයාට කොහොමද කියල දැනගන්න පුලුවන්ද",
  },
  {
    id: "Pos_UI_0003",
    name: "Verify UI handles medium-length valid input",
    input: "mama campus yanna balaaporoththu venavaa",
    expected: "මම campus යන්න බලාපොරොත්තු වෙනවා",
  },
];

test.describe("Positive UI Tests", () => {
  for (const tc of testCases) {
    test(`${tc.id} - ${tc.name}`, async ({ page }) => {
      await page.goto("https://www.swifttranslator.com/", {
        waitUntil: "networkidle",
      });
      const inputArea = page.getByPlaceholder("Input Your Singlish Text Here.");
      const inputSelector =
        'textarea[placeholder="Input Your Singlish Text Here."]';
      await page.fill(inputSelector, "");
      await inputArea.click();
      await inputArea.pressSequentially(tc.input, { delay: 35 });
      await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return;
        el.dispatchEvent(
          new CompositionEvent("compositionend", {
            bubbles: true,
            cancelable: true,
            data: (el as HTMLTextAreaElement).value,
          }),
        );
        el.dispatchEvent(new Event("input", { bubbles: true }));
      }, inputSelector);

      // Special handling for the Clear-input UI test
      if (tc.id === "Pos_UI_0002") {
        const clearLocator = page.getByRole("button", { name: /clear/i });
        const clearButton = clearLocator.first();
        if (await clearButton.isVisible()) {
          await clearButton.click();
        } else {
          await inputArea.click();
          const isMac = await page.evaluate(() =>
            navigator.userAgent.includes("Mac"),
          );
          const modifier = isMac ? "Meta" : "Control";
          await page.keyboard.press(`${modifier}+A`);
          await page.keyboard.press("Backspace");
        }
      }

      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
      const output = await outputBox.textContent();
      expect(output).toContain(tc.expected);
      await page.close();
    });
  }
});
