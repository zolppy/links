import Link from "next/link";
import { Anchor } from "@/components/Anchor/Anchor";

export default function Home() {
  return (
    <>
      <Anchor
        href="https://drive.google.com/drive/folders/1d0CI4v6SahD471GgcGoZ1BvCuf5F-Am-?usp=drive_link"
        target="_blank"
      >
        Certifications
      </Anchor>
      <Link
        href="/contacts"
        className="bg-white p-4 rounded-full w-full text-center lg:hover:cursor-pointer active:shadow-xl lg:hover:shadow-xl"
      >
        Contacts
      </Link>
      <Anchor href="https://projects-zol.vercel.app" target="_blank">
        Projects
      </Anchor>
      <Anchor href="https://resume-zol.vercel.app" target="_blank">
        Resume
      </Anchor>
    </>
  );
}
