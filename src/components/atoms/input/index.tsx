import { useState } from "react";
import styled from "@emotion/styled";
import Icon from "@Atoms/icon";

type InputProps = {
  type?: "password" | "checkbox" | "email" | "text" | "search" | "number";
  color?: "dark" | "light";
  placeholder?: string;
  id?: string;
  icon?: string;
  margin?: [string, string];
};

const InputStyled = styled.div<InputProps>`
  width: fit-content;
  margin: ${({ margin }) => (margin ? `${margin[0]} ${margin[1]}` : "0px")};
  display: flex;
  align-items: center;
  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
    input {
      border: none;
      min-width: ${({ type }) => (type === "checkbox" ? "15px" : "180px")};
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      margin-top: 10px;
      font-size: 13px;
      line-height: 20px;
      padding-left: ${({ icon }) => (icon ? "43px" : "15px")};
      transition: all 0.3s ease;
      :hover {
        cursor: pointer;
      }
      ::placeholder {
      }

      ${({ color, theme }) =>
        (color === "dark" && {
          backgroundColor: theme.colors.primary.dark,
          color: theme.colors.white,
          height: "40px",
          borderRadius: "2px",
          border: `solid 2px ${theme.colors.primary.dark}`,
          "::placeholder": {
            color: theme.colors.white,
          },
          ":hover": {
            backgroundColor: theme.colors.primary.base,
          },
          ":focus": {
            border: `solid 2px ${theme.colors.primary.dark}`,
          },
        }) ||
        (color === "light" && {
          backgroundColor: theme.colors.gray[100],
          color: theme.colors.gray[500],
          height: "40px",
          borderRadius: "2px",
          border: `solid 2px ${theme.colors.gray[100]}`,
          "::placeholder": {
            color: theme.colors.gray[400],
          },
          ":hover": {
            border: `solid 2px ${theme.colors.gray[500]}`,
            backgroundColor: theme.colors.gray[100],
            "::placeholder": {
              color: theme.colors.gray[500],
            },
          },
          ":focus": {
            border: `solid 2px ${theme.colors.gray[500]}`,
          },
        })}
    }
  }
`;

const PasswordContainerStyled = styled.div<InputProps>`
  position: relative;
  left: -40px;
  display: flex;
  padding: 3px;
  border-radius: 2px;
  cursor: pointer;
  svg {
    width: 16px;
    path {
      fill: white;
    }
  }
`;

const IconContainerStyled = styled.div<InputProps>`
  position: absolute;
  left: 15px;
  width: 20px;
  border-radius: 2px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    svg {
      width: 18px;
      height: 18px;
      path {
        ${({ theme }) => theme && { fill: theme.colors.gray[400] }}
        ${({ color, theme }) =>
          color === "dark" && { fill: theme.colors.white }}
      }
    }
  }
`;

const AtomInput: React.FC<InputProps> = ({
  type,
  color,
  placeholder,
  id,
  icon,
  margin,
}) => {
  const [eye, seteye] = useState(false);
  return (
    <InputStyled
      type={type || "text"}
      color={color || `light`}
      icon={icon}
      margin={margin}
    >
      {icon && (
        <IconContainerStyled color={color}>
          <Icon icon={icon} />
        </IconContainerStyled>
      )}
      <label htmlFor={id}>
        {placeholder}
        <input
          id={id}
          type={(eye ? "text" : type) || "text"}
          placeholder={placeholder || `Placeholder ${type || "Text"}`}
        />
      </label>
      {type === "password" && (
        <PasswordContainerStyled
          onClick={() => {
            seteye(!eye);
          }}
        >
          {eye ? <Icon icon="eye-close" /> : <Icon icon="eye-open" />}
        </PasswordContainerStyled>
      )}
    </InputStyled>
  );
};

export default AtomInput;
