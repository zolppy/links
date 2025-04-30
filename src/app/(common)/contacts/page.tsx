import { LinkList } from "@/app/components/LinkList";
import { contactLinks } from "@/utils/mocks/linkGroups";
import { A } from "@/app/components/A";

export default function Socials() {
    return (
        <LinkList>
            {contactLinks.map(({ id, title, url }) => (
                <A key={id} url={url}>
                    {title}
                </A>
            ))}
        </LinkList>
    );
}

Socials.displayName = "Socials";
