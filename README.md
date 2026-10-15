# Healthify

A complete responsive recreation of the supplied Healthify reference, built with real React Native components and exported for the web with Expo.

## Run locally

Use Node.js 22.13 or newer (Node 24 was used for validation).

```bash
npm ci
npm run web
```

Expo prints the development URL. To test the production export:

```bash
npm run build
npm run preview
```

The preview runs at http://localhost:4173. No environment variables, API keys, or external image/font hosts are required.

## Stack

- Expo SDK 57, React 19.2.3, React Native 0.86.3, React Native Web 0.21.
- TypeScript with strict checks and unused-code checks.
- **twrnc**: a Tailwind-compatible utility styling solution for React Native. Shared utilities are combined with typed styles for precise reference measurements; NativeWind is not required.
- Locally bundled DM Sans and Lora fonts via Expo Font.
- Lucide React Native icons, React Native SVG, and Expo Linear Gradient.
- ESLint, Prettier, and Playwright for validation.

The lockfile pins the tested dependency graph. Expo's bundled compatibility manifest was used to select React and React Native versions.

## What is included

All reference sections: navigation, hero, four statistics, overlapping About imagery, four services, four advantages, three pricing plans with promotional image, three process steps, testimonials, FAQ, photographic CTA, and four-column footer.

Desktop uses the reference's compact editorial proportions. Cards reorganize into two columns on tablets and one column on narrow phones. Navigation collapses below 1100px. Mobile controls have larger touch targets.

Working interactions include:

- Header, logo, hero, footer, process, and final CTA navigation.
- Mobile navigation that closes after choosing a destination.
- Service and advantage details, plan comparison, About information, customer stories, and legal dialogs.
- A small journal dialog for the reference's Blogs navigation, without adding a new landing-page section.
- Plan enquiries that preselect the correct plan, allow changing it, validate name/email, and show an explicit demo confirmation.
- Contact enquiries via the floating contact button and footer contact details.
- Multi-open FAQ accordion, keyboard activation, and expand/collapse all.
- Keyboard focus indicators, modal focus trapping, Escape dismissal, and focus restoration.
- Reduced-motion-aware scrolling.

## Project structure

```text
App.tsx                       Page composition, font loading, shared navigation
index.ts                      Expo entry point
src/
  components/                 Shared UI, header, modal, footer, CTA, decoration
  sections/                   Individual sections and reusable section cards
  data/content.ts             Typed plans, services, testimonials, FAQ, navigation
  theme/index.ts              Colors, fonts, responsive widths, Tailwind utilities
  context/PageContext.tsx     Shared navigation and dialog actions
  hooks/                      Isolated web modal focus behavior
  utils/                      Platform-specific scrolling and web metadata
assets/images/                Optimized local food photographs and demo portraits
assets/favicon.png            Original leaf favicon
scripts/qa.mjs                Production browser and responsive tests
docs/                         Validation, screenshots, asset provenance, licenses
vercel.json                   Static export build and routing configuration
```

The supplied original home.png and assessment.pdf are retained as reference materials and are not imported by the application.

## Checks

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
# In another terminal, while preview is running:
npm run test:ui
```

The browser suite uses locally installed Google Chrome. To use Edge, set BROWSER_CHANNEL=msedge before running it. Set QA_URL to test another preview/deployment. The suite checks 1440, 1024, 768, 390, and 320px viewports, overflow, images, loaded fonts, forms, navigation, FAQ controls, focus handling, and browser errors. It writes screenshots and reports to ignored tmp/qa/.


**Live URL: https://healthify-uiux.vercel.app**

## Demo scope and limitations

This is a frontend assessment, not an operating meal-delivery business. Supplied statistics, prices, reviews, and contact details are reference content. Generated customer portraits represent fictional demo people. Contact details open a local enquiry rather than contacting an unverified business. Social icons are noninteractive because no official social destinations were supplied.

Enquiries stay in memory and are cleared when the dialog closes. No real message, payment, order, subscription, or delivery is processed. No authentication or backend is included.

The layout was refined using screenshots; exact original images, fonts, and logo assets were not supplied, so this is a close visual reconstruction rather than a pixel-identical copy. Native iOS/Android device execution was not tested; the assessed delivery target is React Native Web.
