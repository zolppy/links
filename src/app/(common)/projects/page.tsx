import { LinkList } from "@/app/components/LinkList";
import { projectLinks } from "@/utils/mocks/linkGroups";
import { A } from "@/app/components/A";

export default function Projects() {
    return (
        <LinkList>
            {projectLinks.map(({ id, title, url }) => (
                <A key={id} url={url}>
                    {title}
                </A>
            ))}
        </LinkList>
    );
}

Projects.displayName = "Projects";
