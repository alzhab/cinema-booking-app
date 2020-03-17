import React, { useEffect, useState } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing, Mixins } from "styles";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  Easing,
  Animated
} from "react-native";
import { Icon } from "native-base";
import { Colors } from "styles";
import { Video } from "expo-av";
import { MovieCard } from "molecules";

const VideoPlayer = () => {
  return (
    <Flex
      style={{
        width: "100%",
        borderRadius: 20,
        overflow: "hidden",
        height: Mixins.WINDOW_HEIGHT * 0.22,
        position: "relative",
        marginBottom: Mixins.WINDOW_HEIGHT * 0.025
      }}
    >
      <Video
        source={{
          uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        useNativeControls
        isLooping
        style={(StyleSheet.absoluteFill, { width: "100%", height: "100%" })}
      />
    </Flex>
  );
};

const MovieInfo = ({ data }) => {
  return (
    <Flex style={{ marginBottom: Mixins.WINDOW_HEIGHT * 0.05 }}>
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

      <Text family="700" size={18} maxLines={1} style={{ marginBottom: 13 }}>
        {data.title}
      </Text>

      <Text size={14} textTransform="capitalize">
        {data.tags.join(", ")}
      </Text>
    </Flex>
  );
};

const Recomendataions = ({ list }) => {
  return list.map(movie => (
    <Flex style={{ width: "100%" }} key={movie.id}>
      <MovieCard data={movie} row />
      <Flex
        style={{
          width: "100%",
          height: 1,
          backgroundColor: Colors.SECOND_BG,
          marginBottom: 10
        }}
      ></Flex>
    </Flex>
  ));
};

const MovieTrailer = ({ movie, recomendations }) => {
  return (
    <Flex style={{ paddingHorizontal: Spacing.WRAP }}>
      <VideoPlayer />

      <MovieInfo data={movie} />

      <Recomendataions list={recomendations} />
    </Flex>
  );
};

export default AppHOC(MovieTrailer, {
  headerTitle: "MovieTrailer",
  hero: true,
  back: true
});
