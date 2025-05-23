import { LinkList } from "@/app/components/LinkList";
import { projectLinks } from "@/utils/data/linkGroups";
import { Anchor } from "@/app/components/Anchor";

export default function Projects() {
  return (
    <LinkList>
      {projectLinks.map(({ id, title, url }) => (
        <Anchor key={id} href={url}>
          {title}
        </Anchor>
      ))}
    </LinkList>
  );
}

Projects.displayName = "Projects";
