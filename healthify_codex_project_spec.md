# Healthy Meals Landing Page

## Complete Project Specification and Codex Implementation Instructions

## 1. Project Overview

Build a polished, production-style Healthy Meals landing page that
closely reproduces the supplied reference screenshot. Use a real
component-based React Native application with React Native for Web
support. The primary deliverable is a responsive website that runs in a
browser, can be deployed to Vercel, and can also be developed within the
Expo ecosystem.

The supplied screenshot is the primary visual source of truth. Match its
layout, spacing, typography, colors, imagery, section order,
proportions, and overall appearance as closely as practical. Do not
replace the design with a generic food landing page.

The result must be fully responsive and functional. Every visible
button, navigation item, accordion, and other interactive element must
have a meaningful behavior.

### Main goal

Recreate the full Healthy Meals page from the reference, including all
sections from the top navigation through the footer. Prioritize visual
fidelity at desktop size while delivering a clean and usable mobile and
tablet experience.

### Source materials

-   `assessment.pdf`: the five-page frontend assessment brief.
-   `home_upscaled.png`: the supplied reference screenshot for the
    intended page design.

Keep these files available during implementation as visual and
requirements references. Do not display the reference screenshot as the
actual website or use it as a full-page background. Rebuild the page
using real UI components and individual assets.

## 2. Required Technology and Delivery

### Required stack

-   React Native with React Native for Web.
-   Expo is recommended for setup, development, and web export.
-   NativeWind or another suitable Tailwind-compatible styling solution.
-   TypeScript is recommended for maintainable, strongly typed
    components.
-   React Native-compatible icon library, or a small consistent icon set
    that works on web.
-   Vercel for the live web deployment.
-   GitHub for source control and repository delivery.

Use the current stable, mutually compatible versions of Expo, React
Native, React Native Web, NativeWind, and their required configuration.
Verify package compatibility rather than copying old setup instructions
blindly.

### Important platform distinction

The required assessment is a responsive web page implemented with React
Native for Web. Build it using React Native components and make the web
experience the primary delivery target. Do not implement the page as
plain static HTML or as a single HTML/CSS file. Do not substitute a
standard web-only React component stack for React Native without a clear
compatibility reason.

The app should be structured so that Expo can run it locally and export
the web build for Vercel.

### Delivery targets

-   Complete source code in a GitHub repository.
-   Working local development setup.
-   Successful production web build.
-   Live Vercel deployment.
-   Clear `README.md` with project details, setup commands, build
    commands, deployment notes, and the live URL.
-   No committed secrets or private credentials.

## 3. Visual Direction

### Brand

Brand name: **Healthify**

The reference uses a fresh, premium, clean, natural, healthy-food visual
identity. The design should feel calm, trustworthy, warm, and modern.
Avoid a generic template appearance.

### Color direction

Sample and tune colors against the supplied screenshot. Suggested
starting values:

-   Deep forest green: `#102F25` for dark text, footer, and strong
    buttons.
-   Olive green: `#56651F` for highlights, secondary headings, icons,
    and selected states.
-   Soft pale green: `#F1F3E7` for lightly tinted section backgrounds.
-   Warm white: `#FCFBF7` for the main page background.
-   White: `#FFFFFF` for cards and content surfaces.
-   Warm neutral gray: `#E7E5DC` for dividers, subtle borders, and pale
    icons.
-   Body text gray: `#4D504B`.
-   Star gold: `#F5A400`.

These are initial design tokens, not fixed values. Refine them by
comparing the running implementation with the reference image.

### Typography

Use an elegant serif font for large headings and selected plan titles,
paired with a clean sans-serif font for body copy, navigation, labels,
buttons, and supporting text. Choose web-safe or properly loaded fonts
with suitable licenses. Maintain the contrast between refined serif
headlines and compact sans-serif details seen in the reference.

### Shape, spacing, and visual effects

-   Use generous whitespace and restrained decoration.
-   Use rounded image corners and softly rounded cards.
-   Keep borders thin and low contrast.
-   Use subtle shadows only where visible, such as floating labels or
    highlighted cards.
-   Use small, consistent line icons in olive or forest green.
-   Use compact, pill-like or softly rounded call-to-action buttons.
-   Avoid excessive gradients, glass effects, heavy shadows, oversized
    icons, and unnecessary animations.
-   Preserve the reference's editorial, clean layout and clear section
    hierarchy.

## 4. Full Page Structure

Implement all sections in the following order.

1.  Header and navigation.
2.  Hero section.
3.  Trust statistics strip.
4.  About Healthify section.
5.  Meal plans and services.
6.  Why choose Healthify advantages.
7.  Growth plans / pricing.
8.  Healthy eating in three steps.
9.  Customer testimonials.
10. Frequently asked questions.
11. Final call-to-action banner.
12. Footer.

The entire page must be implemented. Do not stop after the hero section.

## 5. Detailed UI Requirements

### 5.1 Header and navigation

Create a slim white header across the top.

Left: - Healthify brand mark. - Arabic-style brand lettering shown in
the reference, with the English word "HEALTHIFY" below or alongside it.
Use a suitable text-based approximation or a licensed logo asset if the
exact mark is unavailable. Do not use an unrelated brand logo.

Center: - Home - About Us - Our Services - Advantages - Growth Plans -
Blogs - Contact Us

Right: - Primary "Get Started" button with a small right-arrow icon.

Behavior: - Each navigation item scrolls to the matching section or
opens the relevant page if a real page exists. - The logo returns to the
top of the page. - The "Get Started" action scrolls to the pricing plans
or final conversion section. - On mobile, replace the desktop navigation
links with an accessible menu button and a working menu panel. - The
mobile menu opens and closes, supports selecting a destination, and
closes after navigation. - Show visible pressed, hover, and focus states
where appropriate.

### 5.2 Hero section

Build a two-column desktop hero with text on the left and a large food
photograph on the right. The reference image uses a light, warm
background with soft, blurred natural details near the edges.

Left content: - Small brand or eyebrow text if needed. - Main headline
on two lines: - "Healthy Meals" - "Happier Lives" - Supporting headline:
"Fresh. Nutritious. Convenient. Delivered to You." - Short paragraph
explaining that Healthify makes healthy eating simple and enjoyable
through chef-prepared meals, customized plans, and a commitment to
wellness goals. - Primary CTA: "Explore Meal Plans" with a right-arrow
icon. - Secondary CTA: "Learn More". - Three compact benefit
indicators: - Fresh Ingredients - Nutritionist Approved - Delivered to
Your Door

Right content: - Large, high-quality photograph of a healthy meal bowl
with grilled chicken, avocado, leafy greens, tomatoes, and grains. - A
small handwritten-style green annotation near the image reading "Good
Food Brightens You", with a hand-drawn arrow pointing toward the meal.
Use a suitable font or recreate the annotation with simple UI
elements. - A floating white label over the image, with a leaf icon
and: - "Nutritious Meals" - "A Healthier Tomorrow"

Layout and styling: - Make the headline the strongest visual element. -
Use dark forest green for the first headline line and olive green for
the second. - Use a large, naturally cropped food image with rounded
corners or a softly blended edge consistent with the reference. - Keep
the content and image aligned vertically. - On mobile, stack the text
and image without clipping, and keep CTAs easy to tap. - Avoid using a
single image that already contains the whole designed hero or its text.

### 5.3 Trust statistics strip

Place a full-width horizontal strip directly below the hero. Use a light
warm-neutral background and four evenly distributed statistics on
desktop.

Items: 1. `1M+` / "Meals Delivered", with a food or delivery-related
icon. 2. `30K+` / "Happy Customers", with a leaf or customer-related
icon. 3. `4.8/5` / "Customer Satisfaction", with a star icon. 4. `550+`
/ "Corporate Clients", with a people icon.

Use thin vertical dividers between items on desktop. Keep the icon,
large figure, and small label aligned. On mobile, use a two-column grid
or another compact arrangement without horizontal overflow.

These are the figures shown in the reference design. Treat them as
display copy for this mock landing page, not as independently verified
business claims.

### 5.4 About Healthify

Use a two-column section with imagery on the left and content on the
right.

Left: - A large photo of a healthy meal bowl. - A smaller overlapping
photo showing hands preparing or serving a healthy meal. - A floating
white card with a leaf icon and the text "Nourishing Lives Daily".

Right: - Small uppercase eyebrow: "ABOUT HEALTHIFY". - Heading: "Your
Trusted Healthy Food Partner". - Paragraph explaining that Healthify
believes healthy eating should be convenient, affordable, and enjoyable,
and that it prepares fresh, balanced meals using high-quality
ingredients to help individuals and families achieve their health goals
without sacrificing taste. - Three compact benefit labels: - Freshly
Prepared Daily - Balanced Nutrition - Great Taste - CTA: "More About Us"
with a right arrow.

Decorative detail: - A very subtle outline botanical illustration near
the right edge, behind the content or in available whitespace. It must
not reduce text readability or interfere with responsive layout.

Mobile: - Stack image composition and text. - Keep the overlapping image
and floating card within the section bounds.

### 5.5 Meal plans and services

Use a white or warm-white section.

Section heading: - Eyebrow: "OUR SERVICES" - Heading: "Healthy Meal
Plans for Every Lifestyle" - Right-aligned "View All Services" link with
arrow on desktop.

Show four cards in one row on desktop. Each card includes a landscape
food image, title, short description, and a small circular arrow control
near the lower-right corner.

Card 1: - Title: "Healthy Ready-To-Eat Meals" - Description: "Fresh,
balanced meals prepared daily and ready to enjoy." - Image: healthy bowl
with grilled chicken, greens, avocado, and tomatoes.

Card 2: - Title: "Customized Meal Plans" - Description: "Personalized
nutrition plans designed for your goals." - Image: salmon with
vegetables or a similar balanced meal.

Card 3: - Title: "Weight Management Plans" - Description: "Delicious
meals to support your weight loss or maintenance journey." - Image:
organized meal-prep containers with colorful vegetables and proteins.

Card 4: - Title: "High-Protein Meal Plans" - Description: "Nutrient-rich
meals for active lifestyles and fitness goals." - Image: protein-rich
bowl with vegetables, legumes, or lean protein.

Behavior: - Each card's arrow or card action must navigate to a relevant
section, open a simple details panel, or scroll to the pricing section.
Do not leave dead controls. - "View All Services" should navigate to the
services area or a dedicated services route if one is implemented. -
Keep card heights consistent on desktop. - On smaller screens, use two
columns when space permits, then one column on narrow phones.

### 5.6 Advantages section

Use a pale green or soft cream section background.

Left content: - Eyebrow: "OUR ADVANTAGES" - Heading: "Why Choose
Healthify" - Copy: "More than just meals, we deliver a healthier,
happier you with benefits that fit your lifestyle." - CTA: "Discover All
Advantages" with arrow.

Right content: Four light cards, each with an olive line icon, title,
and short description: 1. Premium Quality - "High-quality, fresh
ingredients" - Icon: diamond or quality symbol. 2. Health Focused -
"Nutritionist-designed meals" - Icon: heart. 3. Convenient Delivery -
"To your home or office" - Icon: delivery truck. 4. Flexible Plans -
"Options for every dietary need" - Icon: leaf or plant.

Use consistent card dimensions, centered icon placement, and ample
interior whitespace. On mobile, stack the introductory copy above the
cards and use a two-column grid when practical.

### 5.7 Growth plans / pricing

Use a white background and a clear section heading.

Heading: - Eyebrow: "GROWTH PLANS" - Main heading: "Find the Perfect
Plan for You" - Right-aligned "View All Plans" link with arrow.

Display three pricing cards plus a separate promotional image card.

Plan 1: Essential Plan - Short description: "Great for individuals
starting their healthy journey." - Price: `AED 299 / month` -
Benefits: - Fresh daily meals - Balanced nutrition - Flexible delivery -
CTA: "Get Started"

Plan 2: Balanced Plan - Add a prominent "MOST POPULAR" label and star
icon. - Short description: "Our best value plan for a healthier
lifestyle." - Price: `AED 499 / month` - Benefits: - Customized meal
options - Wide variety of meals - Nutritionist support - Flexible
delivery - CTA: "Get Started" - Style this as the selected/highlighted
card with a dark green header strip, a slightly stronger border or
shadow, and a dark green primary button.

Plan 3: Performance Plan - Short description: "For fitness enthusiasts
and active lifestyles." - Price: `AED 699 / month` - Benefits: -
High-protein meals - Performance-focused nutrition - Personalized
plans - Priority support - CTA: "Get Started"

Promotional card: - Large meal photograph. - Overlay headline: "Invest
in a Healthier You". - Dark translucent overlay or gradient only as
needed to preserve legibility.

Behavior: - Every plan CTA must work. For this frontend assessment, open
a functional plan-selection modal or scroll to a contact/enquiry
section. The selected plan should be reflected in the modal or enquiry
form. - Validate required form inputs if a form is included. - Show a
clear confirmation state after a successful mock submission. Do not
imply that a real payment or subscription has been processed. - "View
All Plans" should scroll to the pricing section or open the complete
plans view. - Prices are reference display content. Do not add a real
payment integration unless separately requested.

Mobile: - Stack pricing cards vertically or use a carefully designed
responsive grid. - Keep the popular plan label attached to the correct
card. - Ensure price and CTA remain visible and readable.

### 5.8 Healthy eating in three simple steps

Use a light background and a compact horizontal process row on desktop.

Heading: - Eyebrow: "OUR ADVANTAGES" as shown in the reference, or a
closely related process eyebrow if needed to improve clarity. - Heading:
"Healthy Eating in 3 Simple Steps" - Small right-side helper link: "It's
Easy to Get Started" with arrow.

Steps: 1. "Choose Your Plan" - Supporting text: "Select the meal plan
that fits your goals." - Number badge: `1` - Icon: person or meal-plan
icon. 2. "We Prepare Fresh Meals" - Supporting text: "Our chefs prepare
nutritious meals with care." - Number badge: `2` - Icon: salad bowl or
food icon. 3. "Enjoy Convenient Delivery" - Supporting text: "Receive
your meals and enjoy a healthier you." - Number badge: `3` - Icon:
delivery truck.

Show subtle directional arrows between steps on desktop. On mobile,
stack the steps vertically or use a compact vertical flow. Keep icons
and text aligned.

### 5.9 Customer testimonials

Section heading: - Eyebrow: "CUSTOMER STORIES" - Heading: "What Our
Customers Say" - Right-side link: "View More Reviews" with arrow.

Show three testimonial cards on desktop. Each contains a short review,
circular customer portrait, name, location, and five gold stars.

Testimonial 1: - Review: "Healthify has completely changed my eating
habits. The meals are delicious, fresh, and so convenient!" - Name:
"Sara M." - Location: "Dubai, UAE" - Rating: five stars.

Testimonial 2: - Review: "Finally a healthy meal service that tastes
amazing! It fits perfectly into my busy lifestyle." - Name: "Ahmed R." -
Location: "Dubai, UAE" - Rating: five stars.

Testimonial 3: - Review: "Great quality, variety, and customer service.
I feel healthier and more energized every day." - Name: "Fatima K." -
Location: "Dubai, UAE" - Rating: five stars.

Use suitable licensed or royalty-free portraits. Do not reuse the same
portrait for all three customers. If suitable portraits are unavailable,
use tasteful initials-based avatars instead of broken images.

Behavior: - "View More Reviews" should scroll to the testimonials
section or open a simple additional reviews panel. If only three reviews
are implemented, label the action honestly and make it functional.

### 5.10 FAQ section

Use a two-column desktop layout.

Left: - Eyebrow: "FREQUENTLY ASKED QUESTIONS" - Heading: "Have
Questions? We've Got Answers." - Supporting text: "Find quick answers to
common questions about our meal plans, delivery, and more." - CTA: "View
All FAQs" with arrow.

Right: Create an accessible accordion with these questions: 1. "What are
your meal plans?" 2. "How does delivery work?" 3. "Can I customize my
meals?" 4. "What payment methods do you accept?" 5. "Do you have a
mobile app?"

Interaction requirements: - Each row expands and collapses its answer. -
Use a plus icon when closed and a minus or equivalent indicator when
open. - Keep the open/closed state clear. - Use appropriate
accessibility roles, labels, and expanded-state information. - Keyboard
users must be able to focus and activate each item. - Decide whether one
or multiple questions can remain open, then implement consistently.

Suggested answer content: 1. Meal plans provide ready-to-eat meals or
meal schedules suited to different lifestyle and nutrition goals. 2.
Meals are delivered to the address and on the schedule selected during
the plan enquiry. Since this is a demo, explain the flow without
promising real delivery availability. 3. Customers can indicate
preferences or dietary needs during plan selection. Do not claim support
for every medical or allergy-related requirement. 4. For this frontend
demo, state that payment options are confirmed during the order or
enquiry process. Do not invent a working payment gateway. 5. Explain
that the landing page is the current demo experience. Do not claim that
a mobile app exists unless one is built.

### 5.11 Final CTA banner

Place a full-width, dark green, photographic banner above the footer.

Background: - High-quality food or leafy green imagery with a dark green
overlay for readable text. - Add subtle leaf details near the edges,
matching the reference.

Content: - Eyebrow: "READY TO START?" - Heading: "Transform Your Health,
One Meal At A Time" - Supporting copy: "Fresh. Nutritious. Convenient.
Join thousands of happy customers today." - Button: "Get Started Today"
with arrow.

Behavior: - Button scrolls to the pricing plans or opens the
plan-selection flow. - Maintain sufficient text contrast over the
background.

### 5.12 Footer

Use a dark forest green footer with light text, similar to the
reference.

Column 1: Brand - Healthify logo or text-based brand mark. - Short
description: "At Healthify, we believe healthy eating should be
convenient, affordable, and enjoyable." - Social icons for Facebook, X,
Instagram, and YouTube. Use valid destinations only if supplied.
Otherwise, use clearly marked placeholder links or non-navigating visual
icons with accessible labels, and do not invent official social
profiles.

Column 2: Quick Links - Home - About Us - Our Services - Advantages -
Growth Plans - Blogs - Contact Us

Column 3: Our Services - Healthy ready-to-eat meals - Customized meal
plans - Weight management plans - High-protein meal plans - Corporate
meal solutions - Fitness and wellness nutrition - Healthy snack and food
bundles - Delivery and pickup services

Column 4: Get In Touch - Location: Dubai, UAE - Phone:
`+971 50 262 6144` - Email: `info@healthify.ae`

Treat the contact information as reference mock content. Do not imply
that these details are verified or connected to a real business.

Bottom row: - Copyright: "Copyright © 2026 Healthify. All Rights
Reserved." - Privacy Policy - Terms of Service

Add a small WhatsApp-style floating action button near the bottom-right,
matching the screenshot. Make it a working link only if a real
destination is configured. Otherwise, open a small contact panel or use
a clearly documented demo interaction. Do not invent a real WhatsApp
number or contact URL.

On mobile, stack the footer columns and keep the legal links accessible
without horizontal scrolling.

## 6. Image and Asset Requirements

The assessment does not provide an asset pack. Select suitable,
high-quality food photography, customer portraits, icons, and optional
botanical decoration.

### Required image themes

-   Hero: overhead or angled healthy bowl with grilled chicken, avocado,
    greens, cherry tomatoes, and grains.
-   About section: healthy meal bowl plus hands preparing or serving
    food.
-   Services: ready-to-eat bowl, salmon meal, meal-prep containers,
    high-protein bowl.
-   Pricing promotion: healthy prepared meal in a bowl or tray.
-   Testimonials: three distinct customer portraits, or initials
    avatars.
-   CTA banner: dark leafy green or healthy food image.

### Asset rules

-   Use images from suitable free or royalty-free sources, or create
    assets with permission.
-   Do not use watermarked images.
-   Use consistent photography style, lighting, saturation, and crop.
-   Prefer local project assets for predictable production rendering
    where practical.
-   Use a stable image source and verify the final URLs or downloaded
    files.
-   Avoid broken image links and avoid stretching images.
-   Use the correct `resizeMode` or equivalent behavior, such as
    `cover`, for food photography.
-   Add meaningful alternative text for important images. Decorative
    images should not create redundant screen-reader output.
-   Optimize image sizes and formats. Avoid loading excessively large
    files.
-   Use `aspectRatio`, explicit image containers, and appropriate
    overflow clipping to preserve composition.
-   Do not use the supplied screenshot as a single background image or a
    flat image of the entire website.

## 7. Responsive Behavior

Design and test the following viewport classes:

-   Desktop: approximately 1440 px wide.
-   Small desktop/laptop: approximately 1024 px wide.
-   Tablet: approximately 768 px wide.
-   Mobile: approximately 390 px wide.
-   Narrow mobile: approximately 320 to 360 px wide.

### Desktop

-   Header links remain in a single row.
-   Hero uses two columns.
-   Statistics use four columns.
-   About uses two columns.
-   Services use four cards.
-   Advantages use a text block plus four compact cards.
-   Pricing uses three plan cards and one promotional card where space
    permits.
-   Steps use a horizontal sequence.
-   Testimonials use three columns.
-   FAQ uses two columns.
-   Footer uses four columns.

### Tablet

-   Reduce section padding and gaps.
-   Allow navigation to collapse when the full navigation no longer
    fits.
-   Reduce card columns from four to two.
-   Keep headings and food images balanced.
-   Avoid awkward single-card rows where a two-column grid would work.

### Mobile

-   Use a working mobile navigation menu.
-   Stack the hero text and image.
-   Arrange statistics in a two-column grid.
-   Stack the about composition and text.
-   Use one or two service cards per row depending on available width.
-   Stack the advantages introduction and cards.
-   Stack pricing cards vertically.
-   Stack or vertically connect the three process steps.
-   Stack testimonial cards.
-   Stack FAQ introduction and accordion.
-   Stack CTA banner content and button.
-   Stack footer columns.
-   Use touch targets around 44 by 44 CSS pixels where practical.
-   Prevent horizontal scrolling.
-   Ensure all text, buttons, images, floating labels, and cards remain
    within the viewport.

Do not merely shrink the desktop layout. Reorganize content
intelligently at each breakpoint.

## 8. Functional Requirements

Implement and test all of the following:

-   Logo navigation to the top.
-   Header links that scroll to the correct sections.
-   Responsive mobile menu that opens, closes, and navigates.
-   Hero primary CTA navigation to pricing or services.
-   Hero secondary CTA navigation to the About section.
-   Service card actions with meaningful destinations or details.
-   Advantage CTA with a meaningful destination.
-   Pricing CTAs that open a plan-selection flow or enquiry form.
-   Correct selected-plan state in the plan-selection flow.
-   Form validation if an enquiry form is used.
-   A success confirmation for mock submissions.
-   Working FAQ accordion controls.
-   Footer links that navigate to the relevant section or a real
    implemented page.
-   Floating contact action that opens a real configured destination or
    a useful demo contact panel.
-   Visible hover, focus, and pressed states.
-   Accessible labels for icon-only buttons.
-   Keyboard-accessible navigation and accordion interactions.

No button or link should appear functional if it does nothing. If a real
backend is outside scope, use honest frontend demo behavior rather than
pretending that an order, payment, subscription, message, or booking has
been completed.

## 9. Accessibility

-   Use meaningful text hierarchy and readable font sizes.
-   Maintain adequate foreground/background contrast.
-   Provide accessible names for buttons and icon-only controls.
-   Give informative images meaningful alternative text.
-   Mark purely decorative elements appropriately.
-   Ensure interactive controls are keyboard accessible on web.
-   Use clear focus indicators.
-   Make accordion expanded state available to assistive technology.
-   Do not rely on color alone to communicate selection or status.
-   Avoid motion that distracts from content.
-   Respect reduced-motion preferences where animations are added.
-   Keep touch targets comfortable on mobile.

## 10. Suggested Project Structure

Adjust as needed for the selected Expo and NativeWind setup, but keep
the code modular and easy to maintain.

``` text
healthify/
├── app/
│   ├── _layout.tsx
│   └── index.tsx
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Button.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── StatItem.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── AdvantageCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── ProcessStep.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── PlanSelectionModal.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingContactButton.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AdvantagesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── FAQSection.tsx
│   ├── data/
│   │   ├── services.ts
│   │   ├── plans.ts
│   │   ├── testimonials.ts
│   │   └── faqs.ts
│   ├── theme/
│   │   ├── colors.ts
│   │   ├── spacing.ts
│   │   └── typography.ts
│   ├── hooks/
│   ├── utils/
│   └── types/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── .env.example
├── .gitignore
├── app.json
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

This is a suggested structure, not a requirement to create empty
folders. Only keep files and folders that are used by the
implementation. Keep Expo Router only if it is configured correctly and
useful for this single-page project.

## 11. Code Quality Rules

-   Use reusable React Native components.
-   Use TypeScript for component props, data, and interaction state.
-   Keep data arrays separate from presentation components where
    practical.
-   Avoid one giant component containing the entire landing page.
-   Use consistent naming for components, variables, and files.
-   Extract shared colors, spacing, typography, button variants, and
    section widths into reusable tokens.
-   Avoid repeated hardcoded values when a shared design token is
    appropriate.
-   Avoid unnecessary dependencies.
-   Avoid direct DOM APIs in components intended to run across React
    Native and web unless the platform-specific behavior is isolated and
    justified.
-   Keep web-specific behavior compatible with React Native for Web.
-   Do not introduce a real backend, authentication system, payment
    gateway, or database unless required and explicitly scoped.
-   Do not include unused packages, dead code, debug logs, or temporary
    test UI in the final version.
-   Fix TypeScript errors, bundler errors, console errors, and warnings
    before delivery.

## 12. Environment and Security

-   Do not commit real passwords, API keys, database credentials, or
    private tokens.
-   If environment variables are needed, add their names and safe
    example values to `.env.example`.
-   Add `.env` and other secret-bearing local files to `.gitignore`.
-   Set real deployment environment variables through Vercel project
    settings.
-   If the frontend does not need external services, do not add
    unnecessary environment variables.
-   Do not place private secrets in client-side code. Any value shipped
    to the browser is public.

## 13. GitHub Requirements

-   Create a complete repository containing source code and all required
    configuration.
-   Use clear commit messages throughout development.
-   Commit in logical stages, for example:
    1.  Initialize Expo and NativeWind.
    2.  Add design tokens and shared components.
    3.  Implement header and hero.
    4.  Implement remaining page sections.
    5.  Add responsive layouts and interactions.
    6.  Fix accessibility and visual differences.
    7.  Add documentation and deployment configuration.
-   Include a complete `README.md`.
-   Confirm a fresh clone can install dependencies and start the app
    without missing files.
-   Do not commit build caches, dependency folders, secrets, or
    machine-specific files.

## 14. Vercel Deployment Requirements

-   Configure Expo web export and Vercel build/output settings according
    to the selected Expo version.
-   Run a production web build before deploying.
-   Deploy the latest version of the repository.
-   Open the deployed URL in a clean browser session.
-   Test the live site at desktop and mobile widths.
-   Verify that images, fonts, icons, links, and interactive elements
    work in production.
-   Check direct URL loading and browser refresh behavior.
-   Confirm there is no blank page, broken asset, failed build, or
    obvious console error.
-   Ensure the live deployment corresponds to the latest committed
    source code.

## 15. Testing and Visual QA

Visual fidelity is a major assessment criterion. Do not rely on the
development server looking acceptable at a glance.

### Required comparison workflow

1.  Inspect `home_upscaled.png` and the reference image embedded in
    `assessment.pdf`.
2.  Implement the complete page structure and load the actual assets.
3.  Run the app in a browser at approximately the same desktop width and
    page scale as the reference.
4.  Capture a full-page screenshot of the implementation.
5.  Compare it side by side with the reference.
6.  Identify the largest mismatches in this order:
    -   Overall page width and section heights.
    -   Header and hero proportions.
    -   Main heading typography and line breaks.
    -   Food image selection, crop, and size.
    -   Section backgrounds and spacing.
    -   Card dimensions and alignment.
    -   Icon style, borders, and shadows.
    -   Footer proportions and details.
7.  Correct the biggest differences before polishing tiny details.
8.  Repeat the comparison after major layout changes.
9.  Test tablet and mobile widths separately.
10. Run a final interaction and console check.

### Visual acceptance criteria

-   The same sections appear in the same order.
-   The desktop composition strongly resembles the reference.
-   The main headline uses the same two-line hierarchy and color
    contrast.
-   Food photography appears in the same locations and has comparable
    crop and visual weight.
-   Statistics, service cards, pricing cards, testimonials, FAQ, CTA,
    and footer follow the reference layout.
-   Section spacing and overall page length are reasonably close.
-   Typography hierarchy, icon style, corner radii, and colors are
    consistent.
-   Responsive layouts do not overflow or break.
-   No major element is missing, misaligned, clipped, or covered by
    another element.

Pixel-perfect reproduction depends on the quality and similarity of the
selected source assets, font metrics, viewport, and browser rendering.
Make the closest practical match and use screenshot comparison to refine
it.

## 16. Assessment Rubric

The supplied assessment assigns these marks:

  Evaluation area                                             Marks
  --------------------------------------------------------- -------
  Visual accuracy and completeness                               25
  Responsive behavior across screen sizes                        20
  Component structure and React Native/Web implementation        15
  Code quality and maintainability                               10
  UI interactions and accessibility                              10
  GitHub repository, README, and commit quality                  10
  Successful Vercel deployment                                   10
  Total                                                         100

Use this rubric to prioritize implementation. Visual accuracy and
responsiveness together account for 45 marks.

## 17. Pre-Submission Checklist

-   [ ] All twelve major page sections are implemented.
-   [ ] The full page has been implemented, not only the hero.
-   [ ] The layout works at desktop, tablet, and mobile sizes.
-   [ ] No horizontal scrolling occurs on common mobile widths.
-   [ ] All images, fonts, and icons load correctly.
-   [ ] Food images have suitable crops and aspect ratios.
-   [ ] FAQ items open and close correctly.
-   [ ] Every visible button and navigation item has a meaningful
    behavior.
-   [ ] Plan-selection interaction works and shows the selected plan.
-   [ ] Form validation and confirmation states work if a form is
    included.
-   [ ] Keyboard navigation and focus states work.
-   [ ] TypeScript and production builds pass.
-   [ ] No obvious console errors or warnings remain.
-   [ ] GitHub contains all source and configuration files.
-   [ ] README contains overview, stack, setup, build, environment
    guidance, and deployment URL.
-   [ ] No real secrets or private credentials are committed.
-   [ ] Vercel deployment opens successfully in a clean browser session.
-   [ ] The deployed version matches the latest repository code.
-   [ ] The live page has been checked on desktop and mobile.
-   [ ] Final screenshots have been compared with the supplied
    reference.

## 18. Instructions for Codex

Act as a senior React Native and React Native for Web engineer with
strong visual implementation skills.

Build this project in the current repository. If the repository is
empty, initialize the project with a suitable Expo and React Native for
Web setup. If existing project files are present, inspect them first and
preserve working code where practical.

Follow these instructions:

1.  Read this entire specification before coding.
2.  Inspect the available reference files, especially
    `home_upscaled.png` and `assessment.pdf`, if they exist in the
    workspace.
3.  Check the current repository structure, package manager,
    dependencies, and existing scripts.
4.  Choose a compatible Expo, React Native Web, TypeScript, and
    NativeWind setup. Confirm that the setup supports the intended web
    build.
5.  Build the complete page using reusable React Native components. Do
    not use one full-page screenshot as the website.
6.  Match the reference design closely. Pay attention to the actual
    visual hierarchy, page width, spacing, serif headings, green
    palette, food photography, cards, section backgrounds, and footer.
7.  Add every section and all text content specified in this document.
8.  Source or create suitable, licensed assets. Keep the photography
    visually consistent and avoid watermarks.
9.  Implement responsive layouts for desktop, tablet, and mobile.
10. Implement all listed interactions. Do not leave dead buttons, fake
    links, or non-functional accordions.
11. Keep demo interactions honest. Do not claim to process real
    payments, orders, subscriptions, deliveries, or messages.
12. Add accessibility labels, keyboard behavior, focus styles, and
    meaningful image descriptions.
13. Run the app and inspect it in a browser. Capture screenshots and
    compare them against the supplied reference.
14. Fix visual mismatches iteratively instead of stopping after the
    first working render.
15. Run the available type checks, lint checks, and production build.
    Resolve errors and warnings.
16. Add a useful README, appropriate `.gitignore`, and `.env.example`
    only if environment variables are needed.
17. Prepare the project for GitHub and Vercel. Do not claim that you
    pushed or deployed anything unless you have performed those actions
    and confirmed success.
18. At completion, report:
    -   What you implemented.
    -   The chosen stack and key dependencies.
    -   Commands to install, run, and build.
    -   Any interactions implemented.
    -   Tests and build checks completed.
    -   Any remaining limitations or missing external credentials.
    -   The deployment steps still required, if you did not deploy it.

### Codex execution priorities

Priority 1: Complete the whole page with all required sections.

Priority 2: Match the desktop reference closely, especially the hero,
image composition, typography, spacing, cards, and section colors.

Priority 3: Make every section responsive and remove mobile overflow.

Priority 4: Implement working navigation, accordion, plan selection, and
contact interactions.

Priority 5: Ensure maintainable components, accessible controls, clean
builds, documentation, and deployment readiness.

Do not stop at a plan or a code outline. Inspect the repository,
implement the project, run it, test it, and refine the output as far as
the available environment permits.

## 19. Reference Assessment Notes

The original five-page assessment states that the task is a frontend
implementation assessment for a Healthy Meals landing page. It requires
React Native for Web, Tailwind-style CSS, responsive behavior, reusable
components, interaction and accessibility, GitHub submission, and Vercel
deployment. It also explicitly says that exact source images are not
required, but the finished page must remain visually consistent with the
reference.

The reference screenshot shows a long desktop landing page with a white
top navigation, food-focused hero, four-item statistics strip,
two-column About section, four service cards, pale-green advantages
section, three pricing cards and a promotional image, three process
steps, three testimonials, FAQ accordion, dark photographic CTA banner,
and dark green multi-column footer.

No backend API, database, authentication flow, or payment gateway is
specified by the assessment. Treat these as out of scope unless a later
project requirement adds them.
