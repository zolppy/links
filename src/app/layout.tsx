import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { raleway } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "My Links",
    description: "Link para minhas redes sociais, github, currículos e afins.",
    authors: [
        {
            name: "Gabriel Cavalcante de Jesus Oliveira",
            url: "https://github.com/zolppy",
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={`${raleway.className} antialiased`}>
                {children}
            </body>
            <GoogleAnalytics gaId="G-RD9N4G9150" />
        </html>
    );
}

RootLayout.displayName = "RootLayout";
