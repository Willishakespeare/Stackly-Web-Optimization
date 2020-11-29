import React from "react";
import OrganismsNavigation from "@Organisms/navegation";
import Seo from "@Utils/seo";
import { TFunction } from "next-i18next";
import I18n from "@Src/i18n";
import OrganismHero from "@Src/components/organisms/hero";

type Props = {
  t?: TFunction;
};

const PageHome = ({ t }: Props) => {
  return (
    <>
      <Seo
        page="Home"
        description="In Stackly Code we understand that time is the most valuable asset and if you put it in our hands, we will make sure to bring the best product for your needs."
      />
      <OrganismsNavigation t={t} />
      <OrganismHero t={t} />
    </>
  );
};

PageHome.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default I18n.withTranslation(["common"])(PageHome);
