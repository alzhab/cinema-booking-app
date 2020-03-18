import React from "react";
import { Flex } from "atoms";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { Mixins, Colors } from "styles";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const ThrailerCard = ({
  withGradient = true,
  gradientOpacity = "0.3",
  ...props
}) => {
  const navigation = useNavigation();

  let colorOpacity = "";

  switch (gradientOpacity) {
    case "0.3":
      colorOpacity = "70";
      break;
    case "0.8":
      colorOpacity = "cc";
      break;
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate("MovieThrailer")}>
      <Flex
        style={{
          borderRadius: 15,
          width: Mixins.WINDOW_WIDTH * 0.33,
          height: (Mixins.WINDOW_WIDTH * 0.33) / 2,
          overflow: "hidden",
          position: "relative",
          ...props.style
        }}
        layout="center center"
      >
        <Image
          source={require("assets/images/poster.jpg")}
          style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
        />
        {withGradient && (
          <LinearGradient
            colors={["#fd5c48" + colorOpacity, "#9a38e7" + colorOpacity]}
            style={StyleSheet.absoluteFill}
          ></LinearGradient>
        )}
        <Icon
          type="Feather"
          name="play-circle"
          style={{ color: Colors.MAIN_TEXT }}
        />
        <Flex
          style={{
            position: "absolute",
            backgroundColor: "#000",
            opacity: 0.7,
            top: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
        ></Flex>
      </Flex>
    </TouchableOpacity>
  );
};

export default ThrailerCard;
