import TemplateMain from "@Templates/index";
import OrganismCommunity from "@Organisms/community";
import { useTranslation } from "@Src/i18n";
import I18n from "@Src/i18n";

const CommunityPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TemplateMain t={t}>
        <OrganismCommunity t={t} />
      </TemplateMain>
    </>
  );
};

CommunityPage.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default I18n.withTranslation(["common"])(CommunityPage);
