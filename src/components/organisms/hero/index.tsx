import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { useSpring, animated } from "react-spring";
import { TFunction } from "next-i18next";
import { Link } from "react-scroll";

const Hero = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  margin-top: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 0px 0px;
  }
`;

const TextContainer = styled(animated.div)`
  width: 100%;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 50%;
  }
  margin-bottom: 55px;
  h1 {
    margin-bottom: 20px;
  }
`;
const IllustrationContainer = styled(animated.div)`
  width: 40%;
  margin-bottom: 55px;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  width: 100%;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    margin-top: 15px;
    margin-left: 0px;
    justify-content: flex-start;
  }
  button {
    margin: 10px 20px;
    @media screen and (max-width: 570px) {
      margin: 10px 20px;
    }
    ${({ theme }) => theme.mediaquery.small} {
      margin-left: 0px;
      margin-right: 30px;
    }
  }
`;

type IHero = {
  idScroll?: string;
  t?: TFunction;
};

const AtomTitle = dynamic(() => import("@Atoms/title"));
const AtomBody = dynamic(() => import("@Atoms/body"));
const AtomContainer = dynamic(() => import("@Atoms/container"));
const AtomButton = dynamic(() => import("@Atoms/button"));

const OrganismHero: React.FC<IHero> = ({ idScroll, t }) => {
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
    <Hero id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer style={props}>
          <AtomTitle align="left" bold size="TitleLarge">
            {t && t("hero-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge">
            {t && t("hero-desc")}
          </AtomBody>
          <ButtonContainer>
            <Link to="ContactScroll" smooth offset={-40}>
              <AtomButton color="primary">{t && t("hero-btn-1")}</AtomButton>
            </Link>
            <Link to="ProjectsScroll" smooth offset={-30}>
              <AtomButton outline>{t && t("hero-btn-2")}</AtomButton>
            </Link>
          </ButtonContainer>
        </TextContainer>
        <IllustrationContainer style={props2}>
          <span>poner un svg</span>
        </IllustrationContainer>
      </AtomContainer>
    </Hero>
  );
};

export default OrganismHero;
