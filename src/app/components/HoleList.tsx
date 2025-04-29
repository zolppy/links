import { ReactNode } from "react";

interface HoleList {
    children: ReactNode;
}

export function HoleList({ children }: HoleList) {
    return <ul className="mx-auto">{children}</ul>;
}

HoleList.displayName = "HoleList";
