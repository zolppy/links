import { v4 as uuid } from "uuid";
import { Link } from "@/utils/types/link";

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
const githubLink: Link = {
  id: uuid(),
  title: "GitHub",
  url: "https://github.com/zolppy",
};
const linkedInLink: Link = {
  id: uuid(),
  title: "LinkedIn",
  url: "https://www.linkedin.com/in/zolppy",
};
const resumeLink: Link = {
  id: uuid(),
  title: "Resume",
  url: "https://resume-zol.vercel.app",
};
const whatsAppLink: Link = {
  id: uuid(),
  title: "WhatsApp",
  url: "http://wa.me/5574981343313",
};
const projectsLink: Link = {
  title: "Projects",
  url: "https://projects-zol.vercel.app",
};

export {
  certificationsLink,
  emailLink,
  githubLink,
  linkedInLink,
  resumeLink,
  whatsAppLink,
  projectsLink,
};
