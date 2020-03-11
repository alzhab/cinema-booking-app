import React from "react";
import { Flex, Text } from "atoms";

const AuthHeading = ({ main, second }) => (
  <Flex alignItems="center" style={{ marginTop: "10%" }}>
    <Text family="line" size={18} align="center">
      {second}
    </Text>
    <Text family="700" size={25} align="center" lineHeight={2}>
      {main}
    </Text>
  </Flex>
);

export default AuthHeading;
