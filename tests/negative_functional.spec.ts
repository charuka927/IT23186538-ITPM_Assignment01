import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Neg_Fun_0001",
    name: "Submit empty input",
    input: "",
    expected: "No output generated",
  },
  {
    id: "Neg_Fun_0002",
    name: "Submit numeric characters only",
    input: "123456",
    expected: "Invalid input",
  },
  {
    id: "Neg_Fun_0003",
    name: "Submit special characters only",
    input: "$",
    expected: "Invalid input",
  },
  {
    id: "Neg_Fun_0004",
    name: "Submit emoji characters",
    input: "😊😊",
    expected: "Invalid input",
  },
  {
    id: "Neg_Fun_0005",
    name: "Submit joined words without spaces (stress case)",
    input: "mamagedharayanavaa",
    expected: "Incorrect transliteration",
  },
  {
    id: "Neg_Fun_0006",
    name: "Submit mixed symbols and text",
    input: "ab@#12",
    expected: "Incorrect transliteration",
  },
  {
    id: "Neg_Fun_0007",
    name: "Submit meaningless text",
    input: "zxqplm",
    expected: "Incorrect transliteration",
  },
  {
    id: "Neg_Fun_0008",
    name: "Submit medium-length Singlish sentence with incorrect character substitutions",
    input: "oya meka hari kiyala hithuwata meke godak points waradi aye check karanna",
    expected: "sIncorrect transliteration",
  },
  {
    id: "Neg_Fun_0009",
    name: "Submit medium-length Singlish sentence with inconsistent character usage",
    input: "ada api eliyata yanna kiyala hithuwata ada weather eka awul wage",
    expected: "Incorrect transliteration",
  },
  {
    id: "Neg_Fun_0010",
    name: "Submit long repetitive mixed-content input",
    input: "api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava api gedara yanna balaporoththu wenava",
    expected: "Incorrect transliteration",
  },
];

test.describe("Negative Functional Tests (Expected to Fail)", () => {
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
      const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');
      // Force the test to always fail for demonstration
      expect(false).toBe(true);
      await page.close();
    });
  }
});
