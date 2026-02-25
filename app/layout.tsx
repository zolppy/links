import { ReactNode } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { raleway } from "@/config/fonts";
import avatar from "@/public/avatar.png";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Zolppy's Links",
  description: "Links to my stuff.",
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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} antialiased`}>
        <main className="px-4 py-16 text-blue-700 min-w-[320px] w-full max-w-150 mx-auto">
          <section className="flex flex-col gap-y-6">
            <article className="flex flex-col gap-y-4">
              <Image
                src={avatar}
                alt=""
                height={112}
                width={112}
                className="rounded-full self-center"
              />
              <h1 className="text-2xl font-bold text-center">
                Gabriel Cavalcante
              </h1>
              <ul className="mx-auto">
                <li className="text-lg">
                  Mid-Level Full Stack Software Engineer
                </li>
              </ul>
            </article>
            <article className="flex flex-col gap-y-4">{children}</article>
          </section>
        </main>
      </body>
    </html>
  );
}
