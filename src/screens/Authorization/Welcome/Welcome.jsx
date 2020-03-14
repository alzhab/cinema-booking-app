import React, { useEffect } from "react";
import { Slider } from "organisms";
import AuthHOC from "../AuthHOC";

const Welcome = ({ infoList }) => {
  return <Slider data={infoList} />;
};

export default AuthHOC(Welcome, null, true);
