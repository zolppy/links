import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface H1 extends HTMLAttributes<HTMLHeadElement> {
    children: ReactNode;
}

export function H1({ children, className = "", ...props }: H1) {
    const baseStyles = "text-2xl font-bold text-center";

    return (
        <h1
            {...props}
            className={twMerge(baseStyles, className as ClassNameValue)}
        >
            {children}
        </h1>
    );
}

H1.displayName = "H1";
