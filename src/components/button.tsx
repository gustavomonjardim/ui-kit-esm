import React from "react";
import styled from "styled-components";
import { colors } from "../tokens";
import { Button as RACButton, PressEvent } from "react-aria-components";

export type ButtonProps = {
  onClick?: (e: PressEvent) => void;
  children: string;
  type?: "button" | "submit";
};

const StyledButton = styled(RACButton)`
  background-color: ${colors.secondary};
  color: ${colors.white};
`;

const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <StyledButton type={type} onPress={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
