import React from "react";
import { Text } from "atoms";

const SocialAuth = ({ target }) => {
  let targetText = "";

  switch (target) {
    case "signIn":
      targetText = "Login";
    case "signUp":
      targetText = "Register";
  }

  return (
    <Text
      full
      align="center"
      family="700"
      style={{ marginVertical: 20 }}
      size={15}
    >
      Or {targetText} using Social Media
    </Text>
  );
};

export default SocialAuth;
