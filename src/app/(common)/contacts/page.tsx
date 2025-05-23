import { LinkList } from "@/app/components/LinkList";
import { contactLinks } from "@/utils/data/linkGroups";
import { Anchor } from "@/app/components/Anchor";

export default function Contact() {
  return (
    <LinkList>
      {contactLinks.map(({ id, title, url }) => (
        <Anchor key={id} href={url}>
          {title}
        </Anchor>
      ))}
    </LinkList>
  );
}

Contact.displayName = "Contact";
