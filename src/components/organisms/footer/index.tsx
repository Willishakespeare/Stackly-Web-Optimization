import AtomContainer from "@Atoms/container";
import AtomIcon from "@Atoms/icon";
import styled from "@emotion/styled";
import { TFunction } from "next-i18next";
import LinkNext from "next/link";

type FooterProps = {
  title?: string;
  t?: TFunction;
};

const Footer = styled.div<FooterProps>`
  width: 100vw;
  min-height: 110px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;

const FooterContainer = styled.div<FooterProps>`
  width: 100%;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    flex-direction: row;
    justify-content: space-between;
    margin: 00px 0px;
  }
  span {
    display: none;
    width: 358.47px;
    ${({ theme }) => theme.mediaquery.large} {
      display: flex;
    }
  }
  svg {
    display: flex;
  }
`;
const FooterSocialContainer = styled.div<FooterProps>`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    width: 25px;
    margin-right: 30px;
    span {
      display: none;
    }
  }
  a:nth-last-of-type(1) {
    margin-right: 0px;
  }
`;

const FooterCopyrighted = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme && theme.colors.white};
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const OrganismFooter: React.FC<FooterProps> = ({ t }) => {
  return (
    <Footer>
      <AtomContainer fullwidth alignItems="center" justifyContent="center">
        <FooterContainer>
          <AtomIcon icon="stacklycodelogo" />
          <LinkNext href="/copyrighted">
            <FooterCopyrighted>{t && t("footer-desc")}</FooterCopyrighted>
          </LinkNext>
          <FooterSocialContainer>
            <a
              href="https://www.facebook.com/StacklyCodeOfficial"
              title="Facebook Page"
            >
              <AtomIcon icon="facebook" />
              <span>Facebook</span>
            </a>
            <a
              href="https://www.linkedin.com/company/68642625/admin/"
              title="Linkedin Page"
            >
              <AtomIcon icon="linkedin" />
              <span>Linkedin</span>
            </a>
            <a href="https://github.com/StacklyCode">
              <AtomIcon icon="github" />
              <span>Github</span>
            </a>
            <a href="https://twitter.com/StacklyCode">
              <AtomIcon icon="twitter" />
              <span>Twitter</span>
            </a>
          </FooterSocialContainer>
        </FooterContainer>
      </AtomContainer>
    </Footer>
  );
};

export default OrganismFooter;
