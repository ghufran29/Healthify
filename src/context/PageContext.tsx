import React, { createContext, useContext } from "react";
import { PlanName } from "../data/content";
export type Panel =
  | { kind: "plan"; plan: PlanName }
  | { kind: "contact" }
  | { kind: "info"; title: string; body: string }
  | null;
type PageActions = {
  navigate: (id: string) => void;
  open: (panel: Panel) => void;
};
export const PageContext = createContext<PageActions>({
  navigate: () => {},
  open: () => {},
});
export const usePage = () => useContext(PageContext);
export function PageProvider({
  value,
  children,
}: {
  value: PageActions;
  children: React.ReactNode;
}) {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
}
