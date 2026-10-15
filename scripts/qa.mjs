import { chromium, expect } from "@playwright/test";
import fs from "node:fs";
fs.mkdirSync("tmp/qa", { recursive: true });
const browser = await chromium.launch({
  channel: process.env.BROWSER_CHANNEL || "chrome",
  headless: true,
});
const report = { viewports: [], interactions: [], errors: [] };
const page = await browser.newPage({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  reducedMotion: "reduce",
});
page.on("pageerror", (e) => report.errors.push(e.message));
page.on("console", (m) => {
  if (m.type() === "error" || m.type() === "warning")
    report.errors.push(m.type() + ": " + m.text());
});
page.on("response", (r) => {
  if (r.status() >= 400) report.errors.push(r.status() + ": " + r.url());
});
const url = process.env.QA_URL || "http://localhost:4173";
await page.goto(url, { waitUntil: "networkidle" });
await page
  .getByRole("heading", { name: "Healthy Meals Happier Lives" })
  .waitFor();
for (const width of [1440, 1024, 768, 390, 320]) {
  await page.setViewportSize({ width, height: 1000 });
  await page.waitForTimeout(250);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: "tmp/qa/width-" + width + ".png",
    fullPage: true,
  });
  for (const id of ["home", "plans", "contact"])
    await page
      .locator("#" + id)
      .screenshot({ path: "tmp/qa/" + id + "-" + width + ".png" });
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    viewport: innerWidth,
    height: document.documentElement.scrollHeight,
    images: [...document.images]
      .filter((x) => !x.complete || x.naturalWidth === 0)
      .map((x) => x.src),
    fonts:
      document.fonts.check("14px DMSans") && document.fonts.check("36px Lora"),
    overflow: [...document.querySelectorAll("body *")]
      .filter((x) => {
        const r = x.getBoundingClientRect();
        return (
          r.width > 0 &&
          (r.right > innerWidth + 1 || r.left < -1) &&
          getComputedStyle(x).position !== "absolute"
        );
      })
      .slice(0, 12)
      .map((x) => ({
        tag: x.tagName,
        text: x.textContent?.slice(0, 70),
        width: x.getBoundingClientRect().width,
      })),
  }));
  report.viewports.push({ width, ...metrics });
  expect(
    metrics.scrollWidth,
    "horizontal overflow at " + width,
  ).toBeLessThanOrEqual(width);
  expect(metrics.images, "broken images").toEqual([]);
  expect(metrics.fonts, "fonts loaded").toBe(true);
}
fs.writeFileSync(
  "tmp/qa/viewports.json",
  JSON.stringify(report.viewports, null, 2),
);
await page.setViewportSize({ width: 1440, height: 1000 });
for (const name of ["Essential Plan", "Balanced Plan", "Performance Plan"]) {
  const trigger = page.getByRole("button", {
    name: "Get started with " + name,
  });
  await trigger.click();
  const dialog = page.getByTestId("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("radio", { name: new RegExp(name) }),
  ).toHaveAttribute("aria-checked", "true");
  await dialog.getByRole("button", { name: "Preview enquiry" }).click();
  await expect(
    dialog.getByText("Please enter your name (at least 2 characters)."),
  ).toBeVisible();
  await expect(
    dialog.getByText("Please enter a valid email address."),
  ).toBeVisible();
  await dialog
    .getByRole("textbox", { name: "Name", exact: true })
    .fill("Alex Example");
  await dialog
    .getByRole("textbox", { name: "Email", exact: true })
    .fill("invalid");
  await dialog.getByRole("button", { name: "Preview enquiry" }).click();
  await expect(
    dialog.getByText("Please enter a valid email address."),
  ).toBeVisible();
  await dialog
    .getByRole("textbox", { name: "Email", exact: true })
    .fill("alex@example.com");
  await dialog.getByRole("button", { name: "Preview enquiry" }).click();
  await expect(
    dialog.getByRole("heading", { name: "Demo enquiry complete" }),
  ).toBeVisible();
  await expect(dialog.getByText(new RegExp(name + " enquiry"))).toBeVisible();
  await dialog.getByRole("button", { name: "Done", exact: true }).click();
  await expect(dialog).not.toBeVisible();
  report.interactions.push(
    name + ": correct selection, invalid input rejected, confirmation shown",
  );
}
await page
  .getByRole("button", { name: "Get started with Essential Plan" })
  .click();
await page.getByRole("radio", { name: /Performance Plan/ }).click();
await expect(
  page.getByRole("radio", { name: /Performance Plan/ }),
).toHaveAttribute("aria-checked", "true");
await page.keyboard.press("Escape");
await expect(page.getByTestId("dialog")).not.toBeVisible();
await expect(
  page.getByRole("button", { name: "Get started with Essential Plan" }),
).toBeFocused();
report.interactions.push(
  "Plan can be changed; Escape closes modal and restores focus",
);
for (const question of [
  "What are your meal plans?",
  "How does delivery work?",
  "Can I customize my meals?",
  "What payment methods do you accept?",
  "Do you have a mobile app?",
]) {
  const button = page.getByRole("button", { name: question, exact: true });
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(button).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Space");
  await expect(button).toHaveAttribute("aria-expanded", "false");
}
await page.getByRole("button", { name: "View All FAQs", exact: true }).click();
await expect(page.locator('#faq [aria-expanded="true"]')).toHaveCount(5);
await page.getByRole("button", { name: "Collapse All FAQs" }).click();
report.interactions.push(
  "All FAQ items tested with Enter/Space; expand/collapse all tested",
);
for (const name of [
  "Explore Healthy Ready-To-Eat Meals",
  "Explore Customized Meal Plans",
  "Explore Weight Management Plans",
  "Explore High-Protein Meal Plans",
  "View All Services",
  "Discover All Advantages",
  "View All Plans",
  "View Customer Stories",
  "More About Us",
  "Privacy Policy",
  "Terms of Service",
]) {
  await page.getByRole("button", { name, exact: true }).click();
  await expect(page.getByTestId("dialog")).toBeVisible();
  await page.getByRole("button", { name: "Close dialog" }).click();
}
report.interactions.push(
  "Service, advantage, plan comparison, story, About, privacy and terms panels open and close",
);
await page.getByRole("button", { name: "Open contact enquiry" }).click();
await page.getByRole("textbox", { name: "Name", exact: true }).fill("Alex");
await page
  .getByRole("textbox", { name: "Email", exact: true })
  .fill("alex@example.com");
await page.getByRole("button", { name: "Preview enquiry" }).click();
await expect(
  page.getByRole("heading", { name: "Demo enquiry complete" }),
).toBeVisible();
await page.getByRole("button", { name: "Done", exact: true }).click();
report.interactions.push(
  "Floating contact form validates and confirms a demo enquiry",
);
for (const [label, id] of [
  ["About Us", "about"],
  ["Our Services", "services"],
  ["Advantages", "advantages"],
  ["Growth Plans", "plans"],
  ["Contact Us", "contact"],
]) {
  await page.getByRole("button", { name: label, exact: true }).first().click();
  await expect(page).toHaveURL(new RegExp("#" + id + "$"));
}
await page.getByRole("button", { name: "Blogs", exact: true }).first().click();
await expect(
  page.getByRole("heading", { name: "From the Healthify journal" }),
).toBeVisible();
await page.getByRole("button", { name: "Close dialog" }).click();
for (const label of [
  "Explore Meal Plans",
  "Get Started Today",
  "It's Easy to Get Started",
]) {
  await page.getByRole("button", { name: label, exact: true }).click();
  await expect(page).toHaveURL(/#plans$/);
}
await page.getByRole("button", { name: "Learn More", exact: true }).click();
await expect(page).toHaveURL(/#about$/);
report.interactions.push(
  "Desktop navigation, Blogs, hero and final CTA destinations verified",
);
await page.setViewportSize({ width: 390, height: 844 });
await page.getByRole("button", { name: "Open navigation" }).click();
await expect(
  page.getByRole("button", { name: "Close navigation" }),
).toHaveAttribute("aria-expanded", "true");
await page
  .getByRole("button", { name: "Growth Plans", exact: true })
  .first()
  .click();
await expect(page).toHaveURL(/#plans$/);
await expect(
  page.getByRole("button", { name: "Open navigation" }),
).toBeVisible();
await page
  .getByRole("button", { name: "Get started with Balanced Plan" })
  .click();
await page.waitForTimeout(300);
await page.screenshot({ path: "tmp/qa/mobile-modal.png", fullPage: false });
const dialog = page.getByTestId("dialog");
await dialog.getByRole("button", { name: "Close dialog" }).focus();
await page.keyboard.press("Shift+Tab");
expect(
  await page.evaluate(
    () => !!document.activeElement?.closest('[data-testid="dialog"]'),
  ),
).toBe(true);
await page.keyboard.press("Escape");
report.interactions.push(
  "Mobile menu navigates and closes; modal focus remains trapped",
);
await page.reload({ waitUntil: "networkidle" });
await page
  .getByRole("heading", { name: "Healthy Meals Happier Lives" })
  .waitFor();
report.interactions.push("Direct production refresh works");
fs.writeFileSync("tmp/qa/report.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
expect(report.errors).toEqual([]);
