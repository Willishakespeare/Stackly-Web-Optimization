import styled from "@emotion/styled";

type AtomContainerProps = {
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  fullwidth?: boolean;
};

const Container = styled.div<AtomContainerProps>`
  ${({ fullwidth }) => fullwidth && { width: "100%" }}
  max-width: 1440px;
  height: 100%;
  margin: 0px 40px;
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  ${({ theme }) => theme.mediaquery.extrasmall} {
    margin: 0px 60px;
  }
  ${({ theme }) => theme.mediaquery.small} {
    margin: 0px 80px;
  }
  ${({ theme }) => theme.mediaquery.medium} {
    margin: 0px 100px;
  }
  ${({ theme }) => theme.mediaquery.large} {
    margin: 0px 100px;
  }
  ${({ theme }) => theme.mediaquery.extralarge} {
    margin: 0px 100px;
  }
`;

const AtomContainer: React.FC<AtomContainerProps> = ({
  children,
  alignItems,
  justifyContent,
  fullwidth,
}) => {
  return (
    <Container
      alignItems={alignItems}
      justifyContent={justifyContent}
      fullwidth={fullwidth}
    >
      {children}
    </Container>
  );
};

export default AtomContainer;
