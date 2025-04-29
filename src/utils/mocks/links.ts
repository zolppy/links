import { v4 as uuid } from "uuid";
import { Link } from "@/utils/types/link";

const brArchitectsLink: Link = {
    id: uuid(),
    title: "Br Architects",
    url: "https://br-architects-xi.vercel.app",
};
const certificationsLink: Link = {
    id: uuid(),
    title: "Certificações",
    url: "https://drive.google.com/drive/folders/1d0CI4v6SahD471GgcGoZ1BvCuf5F-Am-?usp=drive_link",
};
const emailLink: Link = {
    id: uuid(),
    title: "E-mail",
    url: "mailto:gabriel.lcifba@gmail.com",
};
const englishResume: Link = {
    id: uuid(),
    title: "Versão em inglês",
    url: "https://drive.google.com/file/d/1wOmNve_h02Zd8SWgCA4MBwo8QPC6OAlH/view?usp=drive_link",
};
const fashionBlogLink: Link = {
    id: uuid(),
    title: "Fashion Blog",
    url: "https://fashion-blog-i.vercel.app/",
};
const githubLink: Link = {
    id: uuid(),
    title: "GitHub",
    url: "https://github.com/zolppy",
};
const interiorDesignLink: Link = {
    id: uuid(),
    title: "Interior Design",
    url: "https://interior-design-vii.vercel.app",
};
const linkedInLink: Link = {
    id: uuid(),
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/zolppy/",
};
const portugueseResume: Link = {
    id: uuid(),
    title: "Versão em português",
    url: "https://drive.google.com/file/d/1Jhe10sOdjsSnvRJrBKStHe_BjZKCcQT8/view?usp=drive_link",
};
const thinCrustPizzaLink: Link = {
    id: uuid(),
    title: "Thin Crust Pizza",
    url: "https://thin-crust-pizza.vercel.app/",
};
const travelAgencyLink: Link = {
    id: uuid(),
    title: "Travel Agency",
    url: "https://travel-agency-fawn.vercel.app/",
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
