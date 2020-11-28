import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import MoleculesTags from "@Molecules/tags";
import AtomButton from "@Atoms/button";
import { TFunction } from "next-i18next";

const fakeUserData = [
  {
    name: "Fernando Lopez",
    description: "CEO",
    img:
      "https://avatars3.githubusercontent.com/u/15000248?s=400&u=2e1dc6e71e73a162aef210b9807890c30bc48c1f&v=4",
    socialnetwork: [
      { name: "github", url: "https://github.com/Beor18" },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/fernandogabriellopez/",
      },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
  {
    name: "Albert Flores",
    description: "Frontend Design",
    img:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    socialnetwork: [
      { name: "facebook", url: "fb.com/willishakkespeare" },
      { name: "twitter", url: "twitter.com/willishakkespeare" },
      { name: "linkedin", url: "linkedin.com/willishakkespeare" },
    ],
  },
];

const Team = styled.section`
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  position: relative;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaquery.small} {
    width: 80%;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    width: 50%;
  }

  h2 {
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  a {
    align-self: center;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 10px;
  }
`;
const TagsContainer = styled.div`
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  article {
    margin-bottom: 20px;
    margin-right: 20px;
  }
`;

type ITeam = {
  idScroll?: string;
  t?: TFunction;
};

const OrganismTeam: React.FC<ITeam> = ({ idScroll, t }) => {
  return (
    <Team id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TagsContainer>
          {fakeUserData.map((item) => (
            <MoleculesTags
              key={item.description}
              title={item.name}
              description={item.description}
              img={item.img}
              socialnetwork={item.socialnetwork}
              color="cyan"
            />
          ))}
        </TagsContainer>
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="white">
            {t && t("team-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            {t && t("team-desc-1")}
          </AtomBody>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            {t && t("team-desc-2")}
          </AtomBody>
          <AtomButton href="/#ContactScroll" color="primary">
            {t && t("team-button")}
          </AtomButton>
        </TextContainer>
      </AtomContainer>
    </Team>
  );
};

export default OrganismTeam;
