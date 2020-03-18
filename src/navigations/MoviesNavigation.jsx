import React, { useState, useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import { Movies, MoviesSearch, MovieThrailer, MovieDetail } from "screens";

const Stack = createStackNavigator();

function MoviesNavigation() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
      }}
    >
      <Stack.Screen name="Movies" component={Movies} />
      <Stack.Screen name="MovieThrailer" component={MovieThrailer} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
    </Stack.Navigator>
  );
}

export default MoviesNavigation;
