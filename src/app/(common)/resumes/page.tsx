import { LinkList } from "@/app/components/LinkList";
import { resumeLinks } from "@/utils/data/linkGroups";
import { A } from "@/app/components/A";

export default function Resumes() {
  return (
    <LinkList>
      {resumeLinks.map(({ id, title, url }) => (
        <A key={id} url={url}>
          {title}
        </A>
      ))}
    </LinkList>
  );
}

Resumes.displayName = "Resumes";
