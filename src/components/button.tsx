import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`
  background-color: green;
`;

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

const Button = ({ children, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
