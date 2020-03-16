import React from "react";
import { Flex, Text } from "atoms";
import { Spacing, Mixins } from "styles";
import { Icon } from "native-base";
import { TouchableOpacity } from "react-native";
import { Colors } from "styles";
import { useNavigation } from "@react-navigation/native";

const AppHeader = ({ headerTitle, HeaderRight, back, ...props }) => {
  const navigation = useNavigation();

  return (
    <Flex
      dir="row"
      layout="space-between center"
      style={{
        paddingHorizontal: Spacing.WRAP,
        paddingTop: Mixins.WINDOW_HEIGHT * 0.02,
        marginBottom: Mixins.WINDOW_HEIGHT * 0.05,
        ...props.style
      }}
    >
      <Flex dir="row" layout="center center">
        {back && (
          <TouchableOpacity
            style={{ marginRight: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              type="Feather"
              name="chevron-left"
              style={{ color: Colors.MAIN_TEXT }}
            />
          </TouchableOpacity>
        )}
        <Text family="700" size={25} textTransform="capitalize">
          {headerTitle}
        </Text>
      </Flex>

      {HeaderRight ? <HeaderRight /> : null}
    </Flex>
  );
};

export default AppHeader;
