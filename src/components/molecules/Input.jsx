import React, { useState } from "react";
import { Item, Label, Input, Icon } from "native-base";
import { Colors, Typography } from "styles";
import { Mixins } from "styles";

const MyInput = ({
  value,
  setValue,
  title,
  placeholder,
  type,
  el,
  ...props
}) => {
  const [error, setError] = useState(false);

  const inputCheckHandle = e => {
    switch (type) {
      case "email":
        const valid = Mixins.checkEmailValid(value);
        setError(!valid);
    }
  };

  const inputChangeHandle = e => {
    setValue(e);
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
        onChangeText={inputChangeHandle}
        value={value}
        autoCapitalize="none"
        ref={el}
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
