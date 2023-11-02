import React from "react";

export type TextFieldProps = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
};

const TextField = ({ onChange, value, name }: TextFieldProps) => {
  return <input name={name} onChange={onChange} value={value} />;
};

export default TextField;
