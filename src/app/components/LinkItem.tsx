import { ReactNode } from "react";
import Link from "next/link";
import { Btn } from "@/app/components/Btn";

interface LinkItem {
    children: ReactNode;
    url: string;
}

export function LinkItem({ children, url }: LinkItem) {
    return (
        <li>
            <Link href={url}>
                <Btn>{children}</Btn>
            </Link>
        </li>
    );
}

LinkItem.displayName = "LinkItem";
