import React from "react";
import dynamic from "next/dynamic";
import TemplateMain from "@Templates/index";
import OrganismHero from "@Organisms/hero";
import Seo from "@Utils/seo";
import I18n from "@Src/i18n";

type IProject = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
  link?: string;
};
const ProjectsDataFake: IProject[] = [
  {
    id: "0",
    title: "Landing page for Amara",
    type: "Web | UI/UX",
    description: "project-desc-1",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604710707/StacklyCodeImages/project2_stlr9u.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "1",
    title: "Landing page for William",
    type: "Web | UI/UX",
    description: "project-desc-2",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604981586/StacklyCodeImages/Project7_jyrxur.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "2",
    title: "Landing page for Company",
    type: "Web | UI/UX",
    description: "project-desc-3",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604981587/StacklyCodeImages/Project6_knc2lj.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "3",
    title: "Landing page for Amara",
    type: "Web | UI/UX",
    description: "project-desc-4",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604711349/StacklyCodeImages/project5_w7xkti.png",
    link: "https://www.google.com.mx",
  },
  {
    id: "4",
    title: "Landing page for Amara",
    type: "Web | UI/UX",
    description: "project-desc-5",
    urlImage:
      "https://res.cloudinary.com/stacklycode/image/upload/v1604711350/StacklyCodeImages/project3_h3911r.png",
    link: "https://www.google.com.mx",
  },
];

const OrganismServices = dynamic(() => import("@Organisms/services"));
const OrganismProjects = dynamic(() => import("@Organisms/projects"));
const OrganismClients = dynamic(() => import("@Organisms/clients"));
const OrganismContact = dynamic(() => import("@Organisms/contact"));

const PageHome = () => {
  const { t } = I18n.useTranslation();
  return (
    <>
      <Seo page="Home" />
      <TemplateMain t={t}>
        <OrganismHero t={t} idScroll="HeroScroll" />
        <OrganismServices t={t} idScroll="ServicesScroll" />
        <OrganismProjects
          t={t}
          idScroll="ProjectsScroll"
          projects={ProjectsDataFake}
        />
        <OrganismClients t={t} idScroll="ClientsScroll" />
        <OrganismContact t={t} idScroll="ContactScroll" />
      </TemplateMain>
    </>
  );
};

export default PageHome;