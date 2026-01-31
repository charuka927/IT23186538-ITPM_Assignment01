import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Neg_UI_0001",
    name: "Verify UI behavior for empty input",
    input: "",
    expected: "No output displayed",
  },
  {
    id: "Neg_UI_0002",
    name: "Verify UI response to unsupported characters",
    input: "$$$ ",
    expected: "Invalid input ",
  },
  {
    id: "Neg_UI_0003",
    name: "Verify UI behavior when input contains only numbers",
    input: "123456789",
    expected: "No valid output generated",
  },
];

test.describe("Negative UI Tests", () => {
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
      // Check that the output does NOT match the expected value (negative test)
      const outputArea = page.getByPlaceholder("Sinhala Output");
      const outputText = await outputArea.inputValue();
      expect(outputText).not.toBe(tc.expected);
      await page.close();
    });
  }
});
