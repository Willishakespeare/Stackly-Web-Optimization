import styled  from "@emotion/styled";
import Link from "next/link";

type ButtonProps = {
  color?: "primary" | "secondary";
  outline?: boolean;
  link?: string;
  href?: string;
  type?: "button" | "reset" | "submit";
};

const Button = styled.button<ButtonProps>`
  /* StyleComponent Style with Theme*/
  position: relative;
  overflow: hidden;
  max-width: 250px;
  ${({ theme }) => theme.mediaquery.extrasmall} {
    max-width: max-content;
  }
  ${({ theme }) => ({
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: "bold",
    lineHeight: theme.texts.Button.LineHeight,
    outline: "none",
    border: `2px solid ${theme.colors.primary.base}`,
    width: "max-content",
    color: theme.colors.white,
    backgroundColor: theme.colors.primary.base,
    padding: "10px 20px",
    borderRadius: "4px",
    ":hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.primary.light,
    },
  })}

  ${({ theme, color }) =>
    color === "primary" && {
      border: `2px solid ${theme.colors.accent.green.base}`,
      backgroundColor: theme.colors.accent.green.base,
      ":hover": {
        backgroundColor: theme.colors.accent.green.dark,
        border: `2px solid ${theme.colors.accent.green.dark}`,
      },
    }}
    
  ${({ theme, outline }) =>
    outline && {
      backgroundColor: "transparent",
      border: `2px solid ${theme.colors.white}`,
      ":hover": {
        backgroundColor: "transparent",
        border: `2px solid ${theme.colors.accent.blue.base}`,
        color: theme.colors.accent.blue.base,
      },
    }}




  transition: all 0.3s ease-out;
`;

const AtomButton: React.FC<ButtonProps> = ({
  color,
  children,
  outline,
  link,
  href,
  type,
}) => {
  if (link) {
    return (
      <Link href={link}>
        <Button color={color} outline={outline}>
          {children}
        </Button>
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href}>
        <Button color={color} outline={outline}>
          {children}
        </Button>
      </a>
    );
  }
  return (
    <Button type={type} color={color} outline={outline}>
      {children}
    </Button>
  );
};

export default AtomButton;
