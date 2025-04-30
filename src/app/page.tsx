import { LinkList } from "@/app/components/LinkList";
import { A } from "@/app/components/A";
import { LinkItem } from "@/app/components/LinkItem";
import { certificationsLink } from "@/utils/mocks/links";

export default function Home() {
    return (
        <LinkList>
            <A url={certificationsLink.url}>{certificationsLink.title}</A>
            <LinkItem url="/resumes">Currículos</LinkItem>
            <LinkItem url="/projects">Projetos</LinkItem>
            <LinkItem url="/socials">Redes sociais</LinkItem>
        </LinkList>
    );
}

Home.displayName = "Home";
