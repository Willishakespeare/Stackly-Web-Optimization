import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import IllustrationHero from "@Assets/img/illustration-services.svg";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import MoleculesTags from "@Molecules/tags";
import AtomButton from "@Atoms/button";
import React from "react";
import { Link } from "react-scroll";
import { TFunction } from "next-i18next";
import { useSpring, animated } from "react-spring";

const Services = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background-color: transparent;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const IllustrationContainer = styled(animated.div)`
  width: 30%;
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
  }
  button {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 30px;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 10px;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    justify-content: space-between;
  }
  article {
    margin-top: 15px;
    ${({ theme }) => theme.mediaquery.small} {
      width: 30vw;
      div {
        div {
          p {
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
    ${({ theme }) => theme.mediaquery.medium} {
      width: 23vw;
    }
    ${({ theme }) => theme.mediaquery.large} {
      width: 320px;
    }
  }
`;

type IServices = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismServices: React.FC<IServices> = ({ idScroll, t }) => {
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
    <Services id={idScroll}>
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
        <IllustrationContainer style={props}>
          <IllustrationHero />
        </IllustrationContainer>
        <TextContainer style={props2}>
          <AtomTitle align="left" bold size="TitleMedium" color="black">
            {t && t("services-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="gray">
            {t && t("services-desc")}
          </AtomBody>
          <TagsContainer>
            <MoleculesTags
              title={t && t("services-tag-1-title")}
              description={t && t("services-tag-1-desc")}
              color="pink"
            />
            <MoleculesTags
              title={t && t("services-tag-2-title")}
              description={t && t("services-tag-2-desc")}
              color="green"
            />
            <MoleculesTags
              title={t && t("services-tag-3-title")}
              description={t && t("services-tag-3-desc")}
              color="blue"
            />
            <MoleculesTags
              title={t && t("services-tag-4-title")}
              description={t && t("services-tag-4-desc")}
              color="orange"
            />
          </TagsContainer>
          <Link to="ContactScroll" smooth offset={-40}>
            <AtomButton>{t && t("services-button")}</AtomButton>
          </Link>
        </TextContainer>
      </AtomContainer>
    </Services>
  );
};

export default OrganismServices;
