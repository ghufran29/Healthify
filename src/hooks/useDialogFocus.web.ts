import { useEffect, useRef } from "react";
export function useDialogFocus(active: boolean, onClose: () => void) {
  const close = useRef(onClose);
  close.current = onClose;
  useEffect(() => {
    if (!active) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(
      () =>
        document
          .querySelector<HTMLElement>('[data-testid="dialog"] [role="button"]')
          ?.focus(),
      80,
    );
    const trap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        close.current();
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = document.querySelector('[data-testid="dialog"]');
      const nodes = Array.from(
        dialog?.querySelectorAll<HTMLElement>(
          'input,textarea,button,[tabindex="0"]',
        ) || [],
      ).filter((x) => x.getClientRects().length);
      if (!nodes.length) return;
      const first = nodes[0],
        last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", trap, true);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", trap, true);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [active]);
}
