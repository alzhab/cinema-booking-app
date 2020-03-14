import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Profile, Movies } from "screens";
import { Spacing, Mixins, Colors } from "styles";
import { Flex } from "atoms";
import { Tab } from "molecules";

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <Flex
      style={{
        position: "absolute",
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

const BottomTab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <BottomTab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <BottomTab.Screen
        name="Movies"
        component={Movies}
        options={{
          icon: "movie-creation"
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={Profile}
        options={{
          icon: "notifications-active"
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={Profile}
        options={{
          icon: "star"
        }}
      />
      <BottomTab.Screen
        name="Theatres"
        component={Profile}
        options={{
          icon: "theaters"
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          icon: "person"
        }}
      />
    </BottomTab.Navigator>
  );
}
