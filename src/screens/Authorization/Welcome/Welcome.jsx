import React, { useEffect } from "react";
import { Slider } from "organisms";
import { AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthHOC from "../AuthHOC";

const Welcome = ({ infoList }) => {
  const navigation = useNavigation();

  const _retrieveData = () => {
    AsyncStorage.getItem("isFirstRun", (err, result) => {
      if (err) {
      } else {
        if (result) {
          navigation.replace("SignIn");
        }
      }
    });
  };

  useEffect(() => {
    _retrieveData();
  }, []);

  return <Slider data={infoList} />;
};

export default AuthHOC(Welcome, null, true);
