import { ReactNode } from "react";

interface HoleItem {
  children: ReactNode;
}

export function HoleItem({ children }: HoleItem) {
  return <li className="text-lg">{children}</li>;
}

HoleItem.displayName = "HoleItem";
