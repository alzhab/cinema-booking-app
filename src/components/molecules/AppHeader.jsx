import React from "react";
import { Flex, Text } from "atoms";
import { Spacing, Mixins } from "styles";

const AppHeader = ({ headerTitle, HeaderRight }) => {
  return (
    <Flex
      dir="row"
      layout="space-between center"
      style={{
        paddingHorizontal: Spacing.WRAP,
        paddingTop: Mixins.WINDOW_HEIGHT * 0.02,
        marginBottom: Mixins.WINDOW_HEIGHT * 0.03
      }}
    >
      <Text family="700" size={25} textTransform="capitalize">
        {headerTitle}
      </Text>

      {HeaderRight ? <HeaderRight /> : null}
    </Flex>
  );
};

export default AppHeader;
