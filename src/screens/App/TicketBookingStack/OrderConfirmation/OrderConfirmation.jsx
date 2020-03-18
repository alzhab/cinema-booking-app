import React, { useState, useEffect } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing, Colors } from "styles";

const OrderConfirmation = ({ movies }) => {
  return <Text>OrderConfirmation</Text>;
};

export default AppHOC(OrderConfirmation, {
  headerTitle: "Ticket Booking",
  back: true
});
