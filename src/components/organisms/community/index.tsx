import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import { useSpring, animated } from "react-spring";
import AtomButton from "@Atoms/button";
import { TFunction } from "next-i18next";
import IllustrationHero from "@Assets/img/illustration-community.svg";

const Community = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  margin-top: 110px;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
`;

const IllustrationContainer = styled(animated.div)`
  width: 35%;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 70%;
  }
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 60%;
  }

  h2 {
    margin-bottom: 20px;
  }
  a {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`;

type ICommunity = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismCommunity: React.FC<ICommunity> = ({ idScroll, t }) => {
  const props = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(-20px)" },
    delay: 700,
  });
  const props2 = useSpring({
    to: { opacity: 1, transform: "translateX(0px)" },
    from: { opacity: 0, transform: "translateX(20px)" },
    delay: 700,
  });
  return (
    <Community id={idScroll}>
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer style={props}>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            {t && t("community-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            {t && t("community-desc")}
          </AtomBody>
          <AtomButton href="https://discord.gg/jjMRrHguPf">
            {" "}
            {t && t("community-button")}
          </AtomButton>
        </TextContainer>
        <IllustrationContainer style={props2}>
          <IllustrationHero />
        </IllustrationContainer>
      </AtomContainer>
    </Community>
  );
};

export default OrganismCommunity;
