import React, { useState } from "react";
import { Item, Label, Input } from "native-base";
import { Colors, Typography } from "styles";
import { Mixins } from "styles";

const MyInput = ({ title, placeholder, type, ...props }) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");

  const inputCheckHandle = e => {
    setValue(e.nativeEvent.text);
    switch (type) {
      case "email":
        const valid = Mixins.emailValidate(value);
        setError(!valid);
    }
  };

  return (
    <Item
      error={error}
      stackedLabel
      style={{ marginLeft: 0, marginBottom: 25 }}
    >
      <Label
        style={{
          color: Colors.SECOND_TEXT,
          fontSize: 15,
          lineHeight: 14,
          fontFamily: Typography.FONT_FAMILY_BOLD
        }}
      >
        {title}
      </Label>
      <Input
        placeholder={placeholder}
        secureTextEntry={type === "password"}
        onBlur={inputCheckHandle}
        value={value}
        onChange={e => setValue(e.value)}
        style={{
          color: Colors.MAIN_TEXT,
          fontFamily: Typography.FONT_FAMILY_BOLD
        }}
        {...props}
      />
    </Item>
  );
};

export default MyInput;
