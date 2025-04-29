import { ReactNode } from "react";

interface Main {
    children: ReactNode;
}

export function Main({ children }: Main) {
    return (
        <main className="px-4 py-16 text-blue-700 flex flex-col gap-y-6 min-w-[320px] w-full max-w-[600px] mx-auto">
            {children}
        </main>
    );
}

Main.displayName = "Main";
