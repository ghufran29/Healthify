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
  css.textContent =
    "html{scroll-behavior:smooth}body{margin:0;background:#fff}*:focus-visible{outline:3px solid #839649!important;outline-offset:4px}input,textarea{outline-offset:2px!important}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}";
  document.head.appendChild(css);
}
