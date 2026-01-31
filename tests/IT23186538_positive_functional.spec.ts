import { test, expect } from "@playwright/test";

// Increase navigation timeout for all tests in this file
test.use({ navigationTimeout: 60000 });

const testCases = [
  {
    id: "Pos_Fun_0001",
    name: "Convert a simple declarative sentence",
    input: "mama gedhara yanavaa",
    expected: "මම ගෙදර යනවා",
  },
  {
    id: "Pos_Fun_0002",
    name: "Convert a simple interrogative sentence",
    input: "oya koheda inne",
    expected: "ඔය කොහෙද ඉන්නේ",
  },
  {
    id: "Pos_Fun_0003",
    name: "Convert a common greeting",
    input: "ayuboovan",
    expected: "අයුබෝවන්",
  },
  {
    id: "Pos_Fun_0004",
    name: "Convert a polite request sentence",
    input: "oyaata puluwandha mata udhavvak karanna",
    expected: "ඔයාට පුලුවන්ද මට උදව්වක් කරන්න",
  },
  {
    id: "Pos_Fun_0005",
    name: "Convert a positive emotional response sentence",
    input: "mata hari sathutuyi",
    expected: "මට හරි සතුටුයි",
  },
  {
    id: "Pos_Fun_0006",
    name: "Convert a consoling advice sentence",
    input: "dhuk venna epaa",
    expected: "දුක් වෙන්න එපා",
  },
  {
    id: "Pos_Fun_0007",
    name: "Convert a casual greeting question",
    input: "oyaata kohomadha",
    expected: "ඔයාට කොහොමද",
  },
  {
    id: "Pos_Fun_0008",
    name: "Convert a formal welcome expression",
    input: "saadharayen piLigannavaa",
    expected: "සාදරයෙන් පිළිගන්නවා",
  },
  {
    id: "Pos_Fun_0009",
    name: "Convert a polite request instruction",
    input: "karuNaakara meya balanna",
    expected: "කරුණාකර මෙය බලන්න",
  },
  {
    id: "Pos_Fun_0010",
    name: "Convert a reassurance advice sentence",
    input: "baya venna epaa",
    expected: "බය වෙන්න එපා",
  },
  {
    id: "Pos_Fun_0011",
    name: "Convert a confirmation response",
    input: "ehema hari",
    expected: "එහෙම හරි",
  },
  {
    id: "Pos_Fun_0012",
    name: "Verify correct transliteration for short well-wishing phrase",
    input: "mobata jaya veevaa",
    expected: "ඔබට ජය වේවා",
  },
  {
    id: "Pos_Fun_0013",
    name: "Convert a planning question sentence",
    input: "api kavadhadha yannee",
    expected: "අපි කවදද යන්නේ",
  },
  {
    id: "Pos_Fun_0014",
    name: "Convert a birthday greeting expression",
    input: "suBha upandhinayak",
    expected: "සුභ උපන්දිනයක්",
  },
  {
    id: "Pos_Fun_0015",
    name: "Convert an availability question sentence",
    input: "oyaata kaalaya thiyanavadha",
    expected: "ඔයාට කාලය තියනවද",
  },
  {
    id: "Pos_Fun_0016",
    name: "Convert an instruction/advice sentence",
    input: "hoDHAta vaeda tika karaganna",
    expected: "හොඳට වැඩ ටික කරගන්න",
  },
  {
    id: "Pos_Fun_0017",
    name: "Convert a future plan statement with location",
    input: "api heta udheema ethanata yanna balaporoththu venavaa",
    expected: "අපි හෙට උදේම එතනට යන්න බලපොරොත්තු වෙනවා",
  },
  {
    id: "Pos_Fun_0018",
    name: "Convert a gratitude expression sentence",
    input: "oyaa karapu udhavvata godak sthuthiyi",
    expected: "ඔයා කරපු උදව්වට ගොඩක් ස්තුතියි",
  },
  {
    id: "Pos_Fun_0019",
    name: "Convert a collaborative encouragement sentence",
    input: "api okkoma ekathu velaa mee vaedee hariyata karamu",
    expected: "අපි ඔක්කොම එකතු වෙලා මේ වැඩේ හරියට කරමු",
  },
  {
    id: "Pos_Fun_0020",
    name: "Convert a feedback/appreciation sentence",
    input: "oyaa magee kathaava ahalaa hoDHA visadhumak dhunnaa",
    expected: "ඔයා මගේ කතාව අහලා හොඳ විසදුමක් දුන්නා",
  },
  {
    id: "Pos_Fun_0021",
    name: "Convert a polite urgent request sentence",
    input: "karuNaakaralaa mee prashnayata ikmanin uththarayak dhenna",
    expected: "කරුණාකරලා මේ ප්‍රශ්නයට ඉක්මනින් උත්තරයක් දෙන්න",
  },
  {
    id: "Pos_Fun_0022",
    name: "Convert a professional appreciation sentence",
    input: "oyath ekka vada karanna laebuNa eka loku sathutak",
    expected: "ඔයත් එක්ක වඩ කරන්න ලැබුණ එක ලොකු සතුටක්",
  },
  {
    id: "Pos_Fun_0023",
    name: "Convert a professional appreciation sentence",
    input: "api mee project eka hoDHAtama karamu",
    expected: "අපි මේ project එක හොඳටම කරමු",
  },
  {
    id: "Pos_Fun_0024",
    name: "Convert a feedback and appreciation sentence",
    input: "oyaa dhunna ideas godak hoDHAyi. eevaa apita godak upakarii vuNaa",
    expected: "ඔයා දුන්න ideas ගොඩක් හොඳයි. ඒවා අපිට ගොඩක් උපකරී වුණා",
  },
];

test.describe("Positive Functional Tests", () => {
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
      await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });
      const output = await outputBox.textContent();
      expect(output).toContain(tc.expected);
      await page.close();
    });
  }
});
