import { chromium, expect } from "@playwright/test";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const url = process.env.QA_URL || "http://localhost:4173";
try {
  for (const width of [1440, 1024, 768, 390, 320]) {
    for (const embedded of [false, true]) {
      const page = await browser.newPage({
        viewport: { width, height: 700 },
        reducedMotion: "reduce",
      });
      let surface = page;
      if (embedded) {
        await page.setContent(
          '<iframe title="Preview" style="position:fixed;inset:0;width:100%;height:100%;border:0"></iframe>',
        );
        await page.locator("iframe").evaluate((frame, src) => {
          frame.src = src;
        }, url);
        surface = await (
          await page.locator("iframe").elementHandle()
        ).contentFrame();
      } else {
        await page.goto(url, { waitUntil: "networkidle" });
      }
      await surface
        .getByRole("heading", { name: "Healthy Meals Happier Lives" })
        .waitFor();
      await expect
        .poll(() =>
          surface.evaluate(() => getComputedStyle(document.body).overflow),
        )
        .toBe("auto");
      await page.mouse.move(Math.floor(width / 2), 400);
      await page.mouse.wheel(0, 800);
      await expect
        .poll(() => surface.evaluate(() => scrollY))
        .toBeGreaterThan(100);
      await surface
        .getByRole("button", { name: "Open contact enquiry" })
        .click();
      await expect(surface.getByTestId("dialog")).toBeVisible();
      await expect
        .poll(() =>
          surface.evaluate(() => getComputedStyle(document.body).overflow),
        )
        .toBe("hidden");
      const lockedY = await surface.evaluate(() => scrollY);
      await page.mouse.move(4, 350);
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(150);
      expect(await surface.evaluate(() => scrollY)).toBe(lockedY);
      await page.keyboard.press("Escape");
      await expect(surface.getByTestId("dialog")).not.toBeVisible();
      await expect
        .poll(() =>
          surface.evaluate(() => getComputedStyle(document.body).overflow),
        )
        .toBe("auto");
      await page.mouse.move(Math.floor(width / 2), 400);
      await page.mouse.wheel(0, 30000);
      await expect(
        surface.getByText("Copyright © 2026 Healthify. All Rights Reserved.", {
          exact: true,
        }),
      ).toBeInViewport();
      expect(
        await surface.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      console.log("PASS: scrolling, modal unlock, footer reachable", {
        width,
        embedded,
      });
      await page.close();
    }
  }
} finally {
  await browser.close();
}
