import React from "react";
import Input from "./Input";

const InputGroup = ({ data }) => {
  data = data.filter(input => !input.hide);

  return data.map(item => (
    <Input
      key={item.title}
      title={item.title}
      placeholder={item.placeholder}
      type={item.type}
      value={item.value}
      setValue={item.setValue}
    />
  ));
};

export default InputGroup;
