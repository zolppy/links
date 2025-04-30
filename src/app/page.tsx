import { LinkList } from "@/app/components/LinkList";
import { A } from "@/app/components/A";
import { LinkItem } from "@/app/components/LinkItem";
import { certificationsLink } from "@/utils/mocks/links";

export default function Home() {
    return (
        <LinkList>
            <A url={certificationsLink.url}>{certificationsLink.title}</A>
            <LinkItem url="/contacts">Contacts</LinkItem>
            <LinkItem url="/projects">Projects</LinkItem>
            <LinkItem url="/resumes">Resumes</LinkItem>
        </LinkList>
    );
}

Home.displayName = "Home";
