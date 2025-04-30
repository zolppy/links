import Image from "next/image";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { raleway } from "@/utils/fonts";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { H1 } from "@/app/components/H1";
import { HoleList } from "@/app/components/HoleList";
import { HoleItem } from "@/app/components/HoleItem";
import { meImg } from "@/utils/mocks/images";
import "@/app/globals.css";

export const metadata: Metadata = {
    title: "My Links",
    description: "Links to my social networks, GitHub, resume and the like.",
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
                <Main>
                    <Section>
                        <Image
                            src={meImg.src}
                            title={meImg.title}
                            alt={meImg.alt}
                            className="w-28 rounded-full self-center"
                        />
                        <H1>Gabriel Cavalcante</H1>
                        <HoleList>
                            <HoleItem>Junior Frontend Developer</HoleItem>
                            <HoleItem>Intern AI/ML Developer</HoleItem>
                            <HoleItem>Intern Data Engineer</HoleItem>
                        </HoleList>
                    </Section>
                    <Section>{children}</Section>
                </Main>
            </body>
            <GoogleAnalytics gaId="G-RD9N4G9150" />
        </html>
    );
}

RootLayout.displayName = "RootLayout";
