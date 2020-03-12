import React from "react";
import { Flex, Text } from "atoms";

const AuthHeading = ({ heading }) => (
  <Flex alignItems="center" style={{ marginTop: "10%" }}>
    <Text family="line" size={18} align="center">
      {heading.second}
    </Text>
    <Text family="700" size={25} align="center" lineHeight={2}>
      {heading.main}
    </Text>
  </Flex>
);

export default AuthHeading;
