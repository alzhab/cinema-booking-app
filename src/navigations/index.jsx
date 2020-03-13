/* TODO Main Navigation (BottomTabBar): 

*/

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthorizationNavigation from "./AuthorizationNavigation";
import { AuthApi } from "api";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Authorization"
          component={AuthorizationNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
