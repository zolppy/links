import Image from "next/image";
import type { Metadata } from "next";
import { raleway } from "@/utils/fonts";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { H1 } from "@/app/components/H1";
import { HoleList } from "@/app/components/HoleList";
import { HoleItem } from "@/app/components/HoleItem";
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
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <Main>
          <Section>
            <Image
              src="https://avatars.githubusercontent.com/u/94535032?v=4"
              alt=""
              height={112}
              width={112}
              className="rounded-full self-center"
            />
            <H1>Gabriel Cavalcante</H1>
            <HoleList>
              <HoleItem>AI/ML | Front-end | Cloud Computing</HoleItem>
            </HoleList>
          </Section>
          <Section>{children}</Section>
        </Main>
      </body>
    </html>
  );
}

RootLayout.displayName = "RootLayout";
