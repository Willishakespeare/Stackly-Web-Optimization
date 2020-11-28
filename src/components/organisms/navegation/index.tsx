import AtomContainer from "@Atoms/container";
import AtomIcon from "@Atoms/icon";
import AtomToggleList from "@Atoms/togglelist";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import { useRouter } from "next/router";
import { TFunction } from "next-i18next";

type NavegationProps = {
  title?: string;
  t?: TFunction;
};

const Navigation = styled.div<NavegationProps>`
  width: 100vw;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zindex.zFixed};
`;
const NavigationLogo = styled.div`
  div {
    width: 35px;
    height: 35px;
    cursor: pointer;
    svg {
      g {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaquery.medium} {
    div {
      width: 195px;
      svg {
        g {
          display: block;
        }
      }
    }
  }
`;

const NavigationLinks = styled.div<NavegationProps>`
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  a {
    text-decoration: none;
  }
`;

const NavigationLink = styled.div<NavegationProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: white;
  cursor: pointer;
  display: flex;
  position: relative;
  div {
    position: absolute;
    right: -15px;
    top: -8px;
    width: 35px;
  }

  margin-right: 20px;
`;

const IconSideBar = styled.button<NavegationProps>`
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
  cursor: pointer;
  z-index: ${({ theme }) => theme.zindex.zModal};
`;

const SideBar = styled.div<NavegationProps>`
  height: 100vh;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.primary.base};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
`;
const ContainerSideBar = styled.div<NavegationProps>`
  width: 100%;
  height: 110px;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: flex-end;
  padding: 0px 200px;
  button {
    justify-self: flex-end;
  }
  ${({ theme }) => theme.mediaquery.extrasmall} {
    padding: 0px 190px;
  }
  ${({ theme }) => theme.mediaquery.small} {
    padding: 0px 190px;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
`;

const NavigationLinksSidebar = styled.div<NavegationProps>`
  height: 100%;
  width: 100%;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    margin-bottom: 50px;
  }
`;
const ToggleContainer = styled.div<NavegationProps>`
  height: max-content;
  width: max-content;
  align-self: baseline;
  margin-top: 36px;
`;

const OrganismNavigation: React.FC<NavegationProps> = ({ t }) => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  return (
    <Navigation>
      <AtomContainer
        fullwidth
        alignItems="center"
        justifyContent="space-between"
      >
        <NavigationLogo>
          {router.pathname !== "/" ? (
            <a href="/">
              <AtomIcon icon="stacklycodelogo" />
            </a>
          ) : (
            <Link to="HeroScroll" smooth offset={-110}>
              <AtomIcon icon="stacklycodelogo" />
            </Link>
          )}
        </NavigationLogo>
        <NavigationLinks>
          <LinkNext href="/about">
            <NavigationLink>{t && t("nav-tag-1")}</NavigationLink>
          </LinkNext>
          <LinkNext href="/community">
            <NavigationLink>
              {t && t("nav-tag-2")} <AtomIcon icon="new" />{" "}
            </NavigationLink>
          </LinkNext>
          {router.pathname !== "/" ? (
            <LinkNext href="/#ServicesScroll">
              <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
            </LinkNext>
          ) : (
            <Link to="ServicesScroll" smooth offset={-60}>
              <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
            </Link>
          )}
          {router.pathname !== "/" ? (
            <LinkNext href="/#ClientsScroll">
              <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
            </LinkNext>
          ) : (
            <Link to="ClientsScroll" smooth offset={-60}>
              <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
            </Link>
          )}
          {router.pathname !== "/" ? (
            <LinkNext href="/#ProjectsScroll">
              <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
            </LinkNext>
          ) : (
            <Link to="ProjectsScroll" smooth offset={-30}>
              <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
            </Link>
          )}
          {router.pathname !== "/" ? (
            <LinkNext href="/#ContactScroll">
              <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
            </LinkNext>
          ) : (
            <Link to="ContactScroll" smooth offset={-40}>
              <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
            </Link>
          )}

          <ToggleContainer>
            <AtomToggleList
              outline
              object={{ title: "Lenguajes", options: ["en", "es"] }}
            />
          </ToggleContainer>
        </NavigationLinks>
        <IconSideBar onClick={() => setSidebar(!sidebar)}>
          <AtomIcon icon="menu" />
        </IconSideBar>
      </AtomContainer>
      {sidebar && (
        <SideBar>
          <ContainerSideBar>
            <ToggleContainer>
              <AtomToggleList
                outline
                object={{ title: "Lenguajes", options: ["en", "es"] }}
              />
            </ToggleContainer>
          </ContainerSideBar>
          <NavigationLinksSidebar>
            <LinkNext href="/about">
              <NavigationLink>{t && t("nav-tag-1")}</NavigationLink>
            </LinkNext>
            <LinkNext href="/community">
              <NavigationLink>
                {t && t("nav-tag-2")} <AtomIcon icon="new" />{" "}
              </NavigationLink>
            </LinkNext>
            {router.pathname !== "/" ? (
              <LinkNext href="/#ServicesScroll">
                <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ServicesScroll" smooth offset={-60}>
                <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
              </Link>
            )}
            {router.pathname !== "/" ? (
              <LinkNext href="/#ClientsScroll">
                <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ClientsScroll" smooth offset={-60}>
                <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
              </Link>
            )}
            {router.pathname !== "/" ? (
              <LinkNext href="/#ProjectsScroll">
                <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ProjectsScroll" smooth offset={-30}>
                <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
              </Link>
            )}
            {router.pathname !== "/" ? (
              <LinkNext href="/#ContactScroll">
                <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ContactScroll" smooth offset={-40}>
                <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
              </Link>
            )}
          </NavigationLinksSidebar>
        </SideBar>
      )}
    </Navigation>
  );
};

export default OrganismNavigation;
