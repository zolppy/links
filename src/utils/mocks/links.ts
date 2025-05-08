import { v4 as uuid } from "uuid";
import { Link } from "@/utils/types/link";

const brArchitectsLink: Link = {
    id: uuid(),
    title: "Br Architects",
    url: "https://br-architects-zol.vercel.app",
};
const certificationsLink: Link = {
    id: uuid(),
    title: "Certifications",
    url: "https://drive.google.com/drive/folders/1d0CI4v6SahD471GgcGoZ1BvCuf5F-Am-?usp=drive_link",
};
const emailLink: Link = {
    id: uuid(),
    title: "Email",
    url: "mailto:gabriel.lcifba@gmail.com",
};
const englishResume: Link = {
    id: uuid(),
    title: "English version",
    url: "https://drive.google.com/file/d/1wOmNve_h02Zd8SWgCA4MBwo8QPC6OAlH/view?usp=drive_link",
};
const fashionBlogLink: Link = {
    id: uuid(),
    title: "Fashion Blog",
    url: "https://fashion-blog-zol.vercel.app",
};
const githubLink: Link = {
    id: uuid(),
    title: "GitHub",
    url: "https://github.com/zolppy",
};
const interiorDesignLink: Link = {
    id: uuid(),
    title: "Interior Design",
    url: "https://interior-design-zol.vercel.app",
};
const linkedInLink: Link = {
    id: uuid(),
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/zolppy",
};
const portugueseResume: Link = {
    id: uuid(),
    title: "Portuguese version",
    url: "https://drive.google.com/file/d/1Jhe10sOdjsSnvRJrBKStHe_BjZKCcQT8/view?usp=drive_link",
};
const thinCrustPizzaLink: Link = {
    id: uuid(),
    title: "Thin Crust Pizza",
    url: "https://thin-crust-pizza.vercel.app",
};
const travelAgencyLink: Link = {
    id: uuid(),
    title: "Travel Agency",
    url: "https://travel-agency-zol.vercel.app",
};
const whatsAppLink: Link = {
    id: uuid(),
    title: "WhatsApp",
    url: "http://wa.me/5574981343313",
};

export {
    brArchitectsLink,
    certificationsLink,
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
};
