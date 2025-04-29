"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Btn } from "@/app/components/Btn";

interface LinkItem {
    children: ReactNode;
    url: string;
}

export function LinkItem({ children, url }: LinkItem) {
    const router = useRouter();

    return (
        <li>
            <Link href={url}>
                <Btn>{children}</Btn>
            </Link>
        </li>
    );
}

LinkItem.displayName = "LinkItem";
