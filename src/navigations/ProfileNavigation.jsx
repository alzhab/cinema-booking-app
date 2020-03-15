import React, { useState, useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import { Profile, Edit, Language, Country } from "screens";

const Stack = createStackNavigator();

function ProfileNavigation() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  );
}

export default ProfileNavigation;
