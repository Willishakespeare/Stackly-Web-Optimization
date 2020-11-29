import styled from "@emotion/styled";
import AtomContainer from "@Atoms/container";
import AtomTitle from "@Atoms/title";
import AtomBody from "@Atoms/body";
import AtomButton from "@Atoms/button";
import AtomInput from "@Atoms/input";
import { TFunction } from "next-i18next";

const Contact = styled.section`
  background: ${({ theme }) => theme.colors.white};
  min-height: calc(100vh - 110px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-size: cover;
  padding: 80px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    padding: 80px 0px;
  }
`;

const IllustrationContainer = styled.div`
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

const TextContainer = styled.div`
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
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-top: 10px;
  justify-content: center;

  div {
    width: 100%;
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
  button {
    align-self: center;
    width: 200px;
    ${({ theme }) => theme.mediaquery.small} {
      align-self: flex-start;
    }
    margin-top: 15px;
  }
`;
const FormLeftContainer = styled.article`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    flex-direction: row;
    justify-content: space-between;
  }
  width: 100%;
  div {
    width: 100%;

    ${({ theme }) => theme.mediaquery.extrasmall} {
      width: 48%;
    }
    label {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

type IContact = {
  idScroll?: string;
  t?: TFunction;
};
const OrganismContact: React.FC<IContact> = ({ idScroll, t }) => {
  return (
    <Contact id={idScroll}>
      <AtomContainer alignItems="center" justifyContent="space-between">
        <TextContainer>
          <AtomTitle align="left" bold size="TitleMedium" color="white">
            {t && t("contact-title")}
          </AtomTitle>
          <AtomBody align="left" size="BodyExtraLarge" color="white">
            {t && t("contact-desc")}
          </AtomBody>
          <FormContainer action="mailto:social@stacklycode.com" method="POST">
            <FormLeftContainer>
              <AtomInput
                id="name"
                margin={["5px", "0px"]}
                placeholder={t && t("contact-input-name")}
              />
              <AtomInput
                id="Subject"
                margin={["5px", "0px"]}
                placeholder={t && t("contact-input-subject")}
              />
            </FormLeftContainer>
            <AtomInput
              id="email"
              type="email"
              margin={["5px", "0px"]}
              placeholder={t && t("contact-input-email")}
            />
            <AtomInput
              id="message"
              margin={["5px", "0px"]}
              placeholder={t && t("contact-input-message")}
              type="text"
            />
            <AtomButton type="submit" color="primary">
              {t && t("contact-input-send")}
            </AtomButton>
          </FormContainer>
        </TextContainer>
        <IllustrationContainer>
          <span>poner un svg</span>
        </IllustrationContainer>
      </AtomContainer>
    </Contact>
  );
};

export default OrganismContact;
