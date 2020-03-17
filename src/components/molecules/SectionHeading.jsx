import React from "react";
import { Text, Flex } from "atoms";
import { Spacing } from "styles";
import { TouchableOpacity } from "react-native";

const SectionHeading = ({ title, rightButton, rightTitle = "view all" }) => {
  return (
    <Flex dir="row" layout="space-between center">
      <Text
        size={17}
        family="700"
        textTransform="capitalize"
        style={{ paddingHorizontal: Spacing.WRAP, paddingBottom: 25 }}
      >
        {title}
      </Text>

      {rightButton && (
        <TouchableOpacity>
          <Text
            size={14}
            family="700"
            textTransform="uppercase"
            style={{ paddingHorizontal: Spacing.WRAP, paddingBottom: 25 }}
          >
            {rightTitle}
          </Text>
        </TouchableOpacity>
      )}
    </Flex>
  );
};

export default SectionHeading;
