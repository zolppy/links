import { ReactNode } from "react";
import { Btn } from "@/app/components/Btn";

interface A {
    children: ReactNode;
    url: string;
}

export function A({ children, url }: A) {
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Btn>{children}</Btn>
            </a>
        </li>
    );
}

A.displayName = "A";
