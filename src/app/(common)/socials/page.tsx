import { LinkList } from "@/app/components/LinkList";
import { socialLinks } from "@/utils/mocks/linkGroups";
import { A } from "@/app/components/A";

export default function Socials() {
    return (
        <LinkList>
            {socialLinks.map(({ id, title, url }) => (
                <A key={id} url={url}>
                    {title}
                </A>
            ))}
        </LinkList>
    );
}

Socials.displayName = "Socials";
