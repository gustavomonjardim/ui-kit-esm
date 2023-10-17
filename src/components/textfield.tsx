import React from "react";

type Props = {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  name?: string;
};

const TextField = ({ onChange, value, name }: Props) => {
  return <input name={name} onChange={onChange} value={value} />;
};

export default TextField;
