import React from "react";
import { Flex } from "atoms";
import { Tab } from "molecules";
import { Spacing, Colors, Mixins } from "styles";

function TabBar({ state, descriptors, navigation, loadingScreens }) {
  return (
    <Flex
      style={{
        position: "absolute",
        zIndex: 1,
        left: Spacing.WRAP,
        right: Spacing.WRAP,
        bottom: Mixins.WINDOW_HEIGHT * 0.05,
        backgroundColor: Colors.SECOND_BG,
        borderRadius: 15,
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        paddingHorizontal: 20
      }}
      layout="space-around center"
      dir="row"
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const icon = options.icon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key
          });
        };

        return (
          <Tab
            loading={loadingScreens.includes(route.name)}
            key={index}
            onLongPress={onLongPress}
            onPress={onPress}
            isFocused={isFocused}
            icon={icon}
          />
        );
      })}
    </Flex>
  );
}

export default TabBar;
