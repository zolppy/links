"use client";

import { useRouter } from "next/navigation";
import { LinkList } from "@/app/components/LinkList";
import { Anchor } from "@/app/components/Anchor";
import { Btn } from "@/app/components/Btn";
import { certificationsLink } from "@/utils/data/links";

export default function Home() {
  const router = useRouter();
  const { url, title } = certificationsLink;

  function goTo(destiny: "/contacts" | "/projects" | "/resumes") {
    router.push(destiny);
  }

  return (
    <LinkList>
      <Anchor href={url}>{title}</Anchor>
      <Btn onClick={() => goTo("/contacts")}>Contacts</Btn>
      <Btn onClick={() => goTo("/projects")}>Projects</Btn>
      <Btn onClick={() => goTo("/resumes")}>Resumes</Btn>
    </LinkList>
  );
}

Home.displayName = "Home";
