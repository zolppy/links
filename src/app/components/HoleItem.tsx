import { ReactNode } from "react";

interface HoleItem {
    children: ReactNode;
}

export function HoleItem({ children }: HoleItem) {
    return <li>{children}</li>;
}

HoleItem.displayName = "HoleItem";
