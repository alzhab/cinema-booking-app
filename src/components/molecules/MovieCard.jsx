import React from "react";
import { Flex, Text } from "atoms";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors, Spacing, Mixins } from "styles";

const MovieCard = ({ data, row, ...props }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{ width: "100%" }}
      onPress={() => {
        navigation.navigate("MovieDetail");
      }}
    >
      <Flex
        style={{ width: "100%", ...props.style }}
        dir={row ? "row" : "column"}
        alignItems={row ? "center" : "flex-start"}
      >
        <Flex
          style={{
            borderRadius: 45,
            height: row ? 150 : 300,
            width: row ? "42%" : "100%",
            overflow: "hidden",
            marginBottom: 15,
            marginRight: row ? "7%" : 0
          }}
        >
          <Image
            source={data.image}
            style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
          />
        </Flex>

        {row ? (
          <Flex>
            <Flex dir="row" alignItems="center" style={{ marginBottom: 15 }}>
              <Text
                family="700"
                size={14}
                lineHeight={1.1}
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 13,
                  borderRadius: 6,
                  borderColor: Colors.MAIN_TEXT,
                  borderWidth: 1.5,
                  marginRight: 10
                }}
              >
                IMDb
              </Text>
              <Text family="700" size={14}>
                {data.rating}
              </Text>
            </Flex>

            <Text
              family="700"
              size={18}
              maxLines={1}
              style={{ marginBottom: 7 }}
            >
              {data.title}
            </Text>

            <Text
              size={14}
              textTransform="capitalize"
              style={{ marginBottom: 7 }}
            >
              Director: {data.director}
            </Text>

            <Text
              size={14}
              textTransform="capitalize"
              lineHeight={1}
              style={{ flexWrap: "wrap", width: "90%" }}
            >
              Stars: {data.stars.join(", ")}
            </Text>
          </Flex>
        ) : null}

        <Text
          align="center"
          full
          family="700"
          size={18}
          maxLines={1}
          style={{ marginBottom: 5 }}
        >
          {data.title}
        </Text>

        <Text align="center" full size={14} textTransform="capitalize">
          {data.tags.join(", ")}
        </Text>
      </Flex>
    </TouchableOpacity>
  );
};

export default MovieCard;
