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
} from "@/utils/data/links";

const contactLinks: Link[] = [
    emailLink,
    githubLink,
    linkedInLink,
    whatsAppLink,
];

const projectLinks: Link[] = [
    brArchitectsLink,
    fashionBlogLink,
    interiorDesignLink,
    thinCrustPizzaLink,
    travelAgencyLink,
];

const resumeLinks: Link[] = [englishResume, portugueseResume];

export { contactLinks, projectLinks, resumeLinks };
