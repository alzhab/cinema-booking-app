import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AppHOC from "../../AppHOC";
import { useNavigation, useRoute } from "@react-navigation/native";

const MovieDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const movie = {
    id: "1",
    image: require("assets/images/poster.jpg"),
    title: `Avengers`,
    tags: ["action", "crime", "thriller"]
  };

  useEffect(() => {}, []);

  return (
    <View>
      <Text>MovieDetail</Text>
    </View>
  );
};

export default AppHOC(MovieDetail, {
  headerTitle: "",
  back: true,
  hero: { image: require("assets/images/poster.jpg") }
});
