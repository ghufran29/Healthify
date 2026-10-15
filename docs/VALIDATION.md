# Validation and visual review

Validated locally on 15 October 2026 (Asia/Karachi).

## Visual comparison

The original 3384 × 7440 reference was inspected as a full page and as section crops. All five assessment pages were text-extracted, and the PDF was rendered to inspect the embedded reference.

The implementation was captured from the actual Expo production export in Chrome at 1440px. Multiple comparison passes corrected the full-width page container, hero image composition and fade, heading and section proportions, service/pricing spacing, testimonial density, footer height, mobile touch targets, and mobile annotation contrast.

At 1440px, the final page is **3169px** tall. The reference scaled to the same width is approximately **3166px** tall. This measures overall proportion, not pixel-perfect similarity.

- [Side-by-side comparison: reference left, implementation right](screenshots/comparison.png)
- [Final desktop screenshot](screenshots/desktop.png)
- [Final 390px mobile screenshot](screenshots/mobile.png)
- [Mobile plan enquiry](screenshots/mobile-enquiry.png)

Hero, pricing, and footer were also captured individually at all five widths. Tablet and mobile layouts were reviewed separately. Original photography, fonts, and logo were unavailable; generated individual photographs, Lora/DM Sans, and an approximate text logo account for remaining visual differences.

## Responsive checks

| Width  | Horizontal overflow | Broken images | Fonts  |
| ------ | ------------------- | ------------- | ------ |
| 1440px | None                | None          | Loaded |
| 1024px | None                | None          | Loaded |
| 768px  | None                | None          | Loaded |
| 390px  | None                | None          | Loaded |
| 320px  | None                | None          | Loaded |

The automated check inspects document width and out-of-viewport element bounds. It checks image completion/natural dimensions and font availability after responsive layout settles.

## Functional browser checks

The production browser suite passed:

- Correct preselected plan for all three pricing buttons.
- Switching between plans.
- Required name/email validation and invalid email rejection.
- Explicit local demo confirmation for all plans and the contact enquiry.
- Escape dismissal, focus restoration, and modal focus trapping.
- Each FAQ opened/closed with Enter and Space; expand/collapse all.
- Service, advantage, About, plan comparison, customer-story, privacy, and terms panels.
- Header navigation, journal dialog, hero CTA, process CTA, and final CTA.
- Mobile menu opens, navigates, and closes.
- Floating contact interaction.
- Direct production page refresh.
- No page errors, console errors/warnings, or HTTP responses >=400.

See [machine-readable report](validation-report.json). Screenshots and tests used the local static production server, not a deployed Vercel instance.

## Build and source checks

- Strict TypeScript check: passed.
- ESLint: passed after correcting ref updates to occur in an effect.
- Expo production web export: passed.
- Clean lockfile install with npm ci --ignore-scripts: passed (856 packages installed).
- Expo dependency compatibility check: passed against the installed SDK's local dependency map. The remote version endpoint was unavailable in that check.
- All images and five font weights are bundled locally.
- No application debug logging, real payment flow, backend, or environment secrets are included.

The export reports a host terminal color warning because NO_COLOR and FORCE_COLOR are both set by the execution environment. This is not a browser/application warning.

## Dependency findings

npm audit reports **29 findings: 9 moderate and 20 high**, including transitive Expo/Metro/Tailwind tooling dependencies and the local preview server's compression dependency. A non-breaking npm audit fix was attempted. The remaining automated recommendation includes a breaking downgrade from Expo 57 to Expo 44, so it was not applied. These findings are not claimed to be fixed.

The dependency install also emits upstream deprecation notices for uuid 7 and ESLint 9. The static Vercel artifact does not run the local Node preview server, but build tooling should still be reviewed as upstream patches become available.

## Unverified or pending

- Native iOS/Android device execution.
- Safari/Firefox browser execution and screen-reader device testing.
- GitHub push: no remote configured.
- Vercel deployment and live URL testing: no connected deployment account/project.
- Exact pixel identity: original assets were not provided.

The README contains the remaining GitHub and Vercel steps. No live deployment is represented as completed.
