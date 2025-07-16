"use client";

import { useRouter } from "next/navigation";
import { LinkList } from "@/app/components/LinkList";
import { Anchor } from "@/app/components/Anchor";
import { Btn } from "@/app/components/Btn";
import { resumeLink, certificationsLink } from "@/utils/data/links";

export default function Home() {
  const router = useRouter();

  function goTo(destiny: "/contacts" | "/projects" | "/resumes") {
    router.push(destiny);
  }

  return (
    <LinkList>
      <Anchor href={certificationsLink.url}>{certificationsLink.title}</Anchor>
      <Btn onClick={() => goTo("/contacts")}>Contacts</Btn>
      <Btn onClick={() => goTo("/projects")}>Projects</Btn>
      <Anchor href={resumeLink.url}>{resumeLink.title}</Anchor>
    </LinkList>
  );
}

Home.displayName = "Home";
