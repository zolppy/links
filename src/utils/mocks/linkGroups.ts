import { Link } from "@/utils/types/link";
import {
    brArchitectsLink,
    emailLink,
    englishResume,
    fashionBlogLink,
    githubLink,
    interiorDesignLink,
    linkedInLink,
    portugueseResume,
    thinCrustPizzaLink,
    travelAgencyLink,
    whatsAppLink,
} from "@/utils/mocks/links";

const projectLinks: Link[] = [
    brArchitectsLink,
    fashionBlogLink,
    interiorDesignLink,
    thinCrustPizzaLink,
    travelAgencyLink,
];

const resumeLinks: Link[] = [englishResume, portugueseResume];

const socialLinks: Link[] = [emailLink, githubLink, linkedInLink, whatsAppLink];

export { projectLinks, resumeLinks, socialLinks };
