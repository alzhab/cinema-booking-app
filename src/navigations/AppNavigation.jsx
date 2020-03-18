//TODO Ticket Booking Navigator
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import BottomBarNavigation from "./BottomBarNavigation";
import { MoviesSearch } from "screens";
import TicketBookingNavigator from "./TicketBookingNavigation";

const App = createStackNavigator();

function AppNavigator() {
  return (
    <App.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
      }}
    >
      <App.Screen name="App" component={BottomBarNavigation} />
      <App.Screen name="MoviesSearch" component={MoviesSearch} />
      <App.Screen
        name="TicketBookingNavigator"
        component={TicketBookingNavigator}
      />
    </App.Navigator>
  );
}

export default AppNavigator;
