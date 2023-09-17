import styled from "styled-components";
import React from "react";

const StyledTextField = styled.input`
  border: 1px solid green;
  border-radius: 4px;
`;

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

const TextField = ({ onChange, value }: Props) => {
  return <StyledTextField onChange={onChange} value={value} />;
};

export default TextField;
