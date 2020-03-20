//TODO TicketNavigation: TicketBooking, Payment, OrderConfirmation
//TODO Components: Checkbox, Seat, SeatsTable,
import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import BottomBarNavigation from "./BottomBarNavigation";
import { TicketBooking, Payment, OrderConfirmation } from "screens";

const Stack = createStackNavigator();

function TicketBookingNavigator() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
      }}
    >
      <Stack.Screen name="TicketBooking" component={TicketBooking} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
    </Stack.Navigator>
  );
}

export default TicketBookingNavigator;
