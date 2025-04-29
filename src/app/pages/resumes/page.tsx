import Image from "next/image";
import { Main } from "@/app/components/Main";
import { Section } from "@/app/components/Section";
import { H1 } from "@/app/components/H1";
import { HoleList } from "@/app/components/HoleList";
import { HoleItem } from "@/app/components/HoleItem";
import { LinkList } from "@/app/components/LinkList";
import { meImg } from "@/utils/mocks/images";
import { resumeLinks } from "@/utils/mocks/resumeLinks";
import { A } from "@/app/components/A";

export default function Resumes() {
    const { src, title, alt } = meImg;

    return (
        <Main>
            <Section>
                <Image
                    src={src}
                    title={title}
                    alt={alt}
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
                    {resumeLinks.map(({ id, title, url }) => (
                        <A key={id} url={url}>
                            {title}
                        </A>
                    ))}
                </LinkList>
            </Section>
        </Main>
    );
}

Resumes.displayName = "Resumes";
