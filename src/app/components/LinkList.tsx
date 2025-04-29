import { ReactNode } from "react";

interface LinkList {
    children: ReactNode;
}

export function LinkList({ children }: LinkList) {
    return <ul className="flex flex-col gap-y-4">{children}</ul>;
}

LinkList.displayName = "LinkList";
