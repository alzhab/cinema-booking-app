import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Welcome, SignIn, SignUp } from "screens";

const Stack = createStackNavigator();

export default function AuthorizationNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
