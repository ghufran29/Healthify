import { chromium, expect } from "@playwright/test";
const browser = await chromium.launch({ channel: "chrome", headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
  });
  await page.goto("http://localhost:4173", { waitUntil: "networkidle" });
  const nav = page.locator('[data-navigation="links"] [role="button"]').first();
  await expect(nav.locator(":scope > div")).toHaveCSS(
    "color",
    "rgb(17, 17, 17)",
  );
  await nav.hover();
  await expect(nav.locator(":scope > div")).toHaveCSS(
    "color",
    "rgb(89, 107, 41)",
  );
  await expect(page.locator('#about [aria-level="2"]').last()).toHaveCSS(
    "font-family",
    "LoraSemiBold",
  );
  await expect(page.locator('#home [aria-level="1"]')).toHaveCSS(
    "font-family",
    "LoraBold",
  );
  await expect(
    page
      .getByRole("button", { name: "Open contact enquiry" })
      .locator("svg path"),
  ).toHaveAttribute("fill", "white");
  const card = page.locator('[data-motion="card"]').first();
  await card.hover();
  await expect(card).toHaveCSS("transform", "matrix(1, 0, 0, 1, 0, -4)");
  await page.screenshot({ path: "tmp/qa/hover-cards.png" });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(card).toHaveCSS("transform", "none");
  await page.mouse.move(0, 0);
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({ path: "tmp/qa/updated-desktop.png", fullPage: true });
  console.log(
    "PASS navigation colors, heading weights, WhatsApp SVG, card hover, reduced motion",
  );
} finally {
  await browser.close();
}
