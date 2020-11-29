import React from "react";
import TemplateMain from "@Templates/index";
import OrganismAbout from "@Organisms/about";
import OrganismTeam from "@Organisms/team";
import { useTranslation } from "@Src/i18n";
import Seo from "@Utils/seo";
import I18n from "@Src/i18n";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Seo page="About" />
      <TemplateMain t={t}>
        <OrganismAbout t={t} />
        <OrganismTeam t={t} />
      </TemplateMain>
    </>
  );
};

AboutPage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default I18n.withTranslation(["common"])(AboutPage);
