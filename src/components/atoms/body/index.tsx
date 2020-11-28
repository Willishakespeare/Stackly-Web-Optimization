import styled from "@emotion/styled";
import { Theme } from "@Styles/styled";

type Size =
  | "BodyExtraLarge"
  | "BodyLarge"
  | "BodyMedium"
  | "BodySmall"
  | "BodyExtraSmall";

type BodyProps = {
  size?: Size;
  color?: "white" | "green" | "gray" | "black";
  align?: "left" | "center";
  bold?: boolean;
};

const getColor = (
  theme: Theme,
  color: "white" | "green" | "gray" | "black" | undefined
) => {
  switch (color) {
    case "black":
      return theme.colors.primary.base;
    case "gray":
      return theme.colors.gray[500];
    case "green":
      return theme.colors.accent.cyan.light;
    default:
      return theme.colors.gray[100];
  }
};

const getMobileSize = (size: Size | undefined) => {
  switch (size) {
    case "BodyExtraSmall":
      return "BodyExtraSmall";
    case "BodySmall":
      return "BodyExtraSmall";
    case "BodyMedium":
      return "BodySmall";
    case "BodyLarge":
      return "BodyMedium";
    default:
      return "BodyLarge";
  }
};

const Body = styled.p<BodyProps>`
  ${({ theme, size, color, bold }) => ({
    fontFamily: theme.texts.BodyExtraLarge.FontFamily,
    fontWeight: bold ? 700 : 400,
    fontsize: "normal",
    textAlign: "center",
    fontSize: theme.texts[getMobileSize(size)].FontSize,
    lineHeight: theme.texts[getMobileSize(size)].LineHeight,
    color: getColor(theme, color),
  })}

  ${({ theme }) => theme.mediaquery.small} {
    ${({ theme, size, align }) => ({
      textAlign: align || "center",
      fontSize: theme.texts[size || "BodyExtraLarge"].FontSize,
      lineHeight: theme.texts[size || "BodyExtraLarge"].LineHeight,
    })}
  }
  ${({ color }) => color === "green" && { cursor: "pointer" }}
`;

const AtomBody: React.FC<BodyProps> = ({
  children,
  size,
  color,
  align,
  bold,
}) => {
  return (
    <Body size={size} color={color} align={align} bold={bold}>
      {children}
    </Body>
  );
};

export default AtomBody;
