import Image from "next/image";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { H1 } from "@/app/components/H1";
import { HoleList } from "@/app/components/HoleList";
import { HoleItem } from "@/app/components/HoleItem";
import { LinkList } from "@/app/components/LinkList";
import { A } from "@/app/components/A";
import { LinkItem } from "@/app/components/LinkItem";
import { meImg } from "@/utils/mocks/images";
import { certificationsLink } from "@/utils/mocks/links";

export default function Home() {
    return (
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
                    <HoleItem>Desenvolvedor Frontend Júnior</HoleItem>
                    <HoleItem>Desenvolvedor AI/ML estagiário</HoleItem>
                    <HoleItem>Engenheiro de Dados estagiário</HoleItem>
                </HoleList>
            </Section>
            <Section>
                <LinkList>
                    <A url={certificationsLink.url}>
                        {certificationsLink.title}
                    </A>
                    <LinkItem url="/pages/resumes">Currículos</LinkItem>
                    <LinkItem url="/pages/projects">Projetos</LinkItem>
                    <LinkItem url="/pages/socials">Redes sociais</LinkItem>
                </LinkList>
            </Section>
        </Main>
    );
}

Home.displayName = "Home";
