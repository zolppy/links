import { LinkList } from "@/app/components/LinkList";
import { resumeLinks } from "@/utils/data/linkGroups";
import { Anchor } from "@/app/components/Anchor";

export default function Resumes() {
  return (
    <LinkList>
      {resumeLinks.map(({ id, title, url }) => (
        <Anchor key={id} href={url}>
          {title}
        </Anchor>
      ))}
    </LinkList>
  );
}

Resumes.displayName = "Resumes";
