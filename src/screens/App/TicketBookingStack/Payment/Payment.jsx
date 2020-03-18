import React, { useState, useEffect } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing, Colors } from "styles";

const Payment = ({ movies }) => {
  return <Text>Payment</Text>;
};

export default AppHOC(Payment, {
  headerTitle: "Payment",
  back: true
});
