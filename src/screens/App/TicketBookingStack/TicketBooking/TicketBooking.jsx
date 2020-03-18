import React, { useState, useEffect } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing, Colors } from "styles";

const TicketBooking = ({ movies }) => {
  return <Text>Ticket booking</Text>;
};

export default AppHOC(TicketBooking, {
  headerTitle: "Ticket Booking",
  back: true
});
