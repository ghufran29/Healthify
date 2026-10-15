export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return false;
  target.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
    block: "start",
  });
  window.history.replaceState(null, "", "#" + id);
  return true;
}
export function setPageMetadata() {
  document.title = "Healthify — Healthy Meals, Happier Lives";
  document.documentElement.lang = "en";
  const meta = document.createElement("meta");
  meta.name = "description";
  meta.content =
    "Fresh, nutritious meals for every lifestyle. Explore Healthify meal plans in this responsive frontend assessment demo.";
  document.head.appendChild(meta);
  const css = document.createElement("style");
  // This website scrolls the document, so override Expo's fixed-height app reset.
  // Inline overflow styles still let dialogs temporarily lock background scrolling.
  css.textContent =
    "html{height:auto;min-height:100%;scroll-behavior:smooth}body{height:auto;min-height:100%;overflow:auto;margin:0;background:#fff}#root{height:auto;min-height:100vh;flex-direction:column}*:focus-visible{outline:3px solid #839649!important;outline-offset:4px}input,textarea{outline-offset:2px!important}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}";
  css.textContent += `
    [role="button"], [role="button"] > div, [data-motion] {
      transition: color 180ms ease, background-color 180ms ease, opacity 180ms ease, transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
    }
    [data-navigation="links"] [role="button"] > div,
    [data-navigation="link"] > div { color: #111111 !important; }
    [data-navigation="links"] [role="button"]:focus-visible > div,
    [data-navigation="link"]:focus-visible > div { color: #596B29 !important; }
    @media (hover: hover) and (pointer: fine) {
      [role="button"]:hover { transform: translateY(-1px); }
      [role="button"]:active { transform: translateY(0) scale(.98); }
      [data-motion="card"]:hover, [data-motion="card"]:focus-within {
        transform: translateY(-4px); box-shadow: 0 9px 22px rgba(18,46,36,.12);
      }
      [data-motion="social"]:hover { transform: translateY(-3px); background-color: #596B29; border-color: #E7EBDF; }
      [data-navigation="links"] [role="button"]:hover > div,
      [data-navigation="link"]:hover > div { color: #596B29 !important; }
    }
    @media (prefers-reduced-motion: reduce) {
      [role="button"], [role="button"] > div, [data-motion] { transition: none !important; transform: none !important; }
    }
  `;
  document.head.appendChild(css);
}
