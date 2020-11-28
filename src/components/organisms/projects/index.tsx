import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import MoleculeProjectInfo from "@Molecules/projectinfo";
import AtomImage from "@Atoms/image";
import { useState } from "react";
import { Link } from "react-scroll";
import { TFunction } from "next-i18next";

type IProject = {
  id?: string;
  title?: string;
  type?: string;
  description?: string;
  urlImage?: string;
  link?: string;
};

type ProjectsProps = {
  idScroll?: string;
  projects?: IProject[];
  t?: TFunction;
};

const Projects = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  padding: 50px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow-x: hidden;
`;
const ParagraphTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  h2 {
    max-width: 700px;
    padding: 0px 20px;
  }
  p {
    margin-top: 20px;
    padding: 0px 20px;
    max-width: 700px;
  }
`;

const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    flex-direction: row;
    align-items: baseline;
  }
  justify-content: center;
  margin-top: 10px;
  min-width: 220px;
  p {
    margin-top: 0px;
    margin-right: 10px;
    width: max-content;
  }
`;

const ScrollProjectsContainer = styled.div`
  display: flex;
  width: 85%;
  overflow-x: scroll;
  justify-content: flex-start;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.primary.light};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary.base};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accent.blue.light};
  }
`;

const AllProjectsContainer = styled.div`
  display: flex;
  align-self: baseline;
  width: max-content;
  margin-top: 20px;
  button {
    margin: 20px 10px;
  }
`;
const ButtonProject = styled.div`
  border: none;
  cursor: pointer;
  margin-right: 20px;
`;

const OrganismProjects: React.FC<ProjectsProps> = ({
  idScroll,
  projects,
  t,
}) => {
  const [projectID, setProjectID] = useState<IProject | undefined>({});
  return (
    <Projects id={idScroll}>
      <AtomContainer
        alignItems="center"
        justifyContent="space-between"
        fullwidth
      >
        <ProjectsContainer>
          <ParagraphTitle>
            <AtomTitle bold size="TitleMedium">
              {t && t("projects-title")}
            </AtomTitle>
            <AtomBody size="BodyExtraLarge" color="white">
              {t && t("projects-desc")}
            </AtomBody>
          </ParagraphTitle>
          <ParagraphContainer>
            <AtomBody size="BodyLarge">
              {t && t("projects-desc-button-1")}
            </AtomBody>
            <Link to="ContactScroll" smooth offset={-40}>
              <AtomBody color="green" size="BodyLarge">
                {t && t("projects-desc-button-2")}
              </AtomBody>
            </Link>
          </ParagraphContainer>
          <MoleculeProjectInfo
            title={projectID?.title || (projects && projects[0].title)}
            urlImage={projectID?.urlImage || (projects && projects[0].urlImage)}
            type={projectID?.type || (projects && projects[0].type)}
            description={
              (projectID?.description && t && t(`${projectID.description}`)) ||
              (t && t(`${projects && projects[0].description}`))
            }
            id={projectID?.id || (projects && projects[0].id)}
            link={projectID?.link || (projects && projects[0].link)}
          />
          <AtomBody size="BodySmall" color="white">
            {t && t("projects-click")}
          </AtomBody>
          <ScrollProjectsContainer>
            <AllProjectsContainer>
              {projects?.map((item) => (
                <ButtonProject
                  key={item.id}
                  id={item.id}
                  onClick={(e) =>
                    setProjectID(
                      projects.find(
                        (itemFind) => itemFind.id === e.currentTarget.id
                      )
                    )
                  }
                >
                  <AtomImage image={item.urlImage} />
                </ButtonProject>
              ))}
            </AllProjectsContainer>
          </ScrollProjectsContainer>
        </ProjectsContainer>
      </AtomContainer>
    </Projects>
  );
};

export default OrganismProjects;
