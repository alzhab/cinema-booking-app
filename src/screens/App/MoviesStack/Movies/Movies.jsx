import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  Easing,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import AppHOC from "../../AppHOC";
import { SearchButton } from "organisms";
import { Flex, Text } from "atoms";
import { Mixins, Spacing, Colors } from "styles";
import { CardSlider, MovieCard } from "molecules";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { SectionHeading, ThrailerCard } from "molecules";
import { Icon } from "native-base";

const Indicator = ({ isActive }) => {
  const [animation, setAnimation] = useState(
    new Animated.Value(isActive ? 0 : 1)
  );

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isActive ? 1 : 0,
      duration: 350,
      easing: Easing.in
    }).start();
  }, [isActive]);

  const posInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8]
  });

  const borderInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1.5]
  });

  return (
    <Animated.View
      style={{
        width: 16,
        height: 16,
        padding: 3,
        borderRadius: 16,
        marginHorizontal: 3,
        overflow: "hidden",
        borderWidth: borderInterpolation,
        borderColor: Colors.MAIN_TEXT,
        transform: [
          {
            translateY: posInterpolation
          }
        ]
      }}
    >
      <Flex
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 5,
          backgroundColor: isActive ? Colors.MAIN_TEXT : Colors.SECOND_TEXT
        }}
      ></Flex>
    </Animated.View>
  );
};

const Slider = ({ moviesList }) => {
  const navigation = useNavigation();

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length === 1) {
      setActiveItemIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = React.useRef({
    minimumViewTime: 100,
    viewAreaCoveragePercentThreshold: 100
  });

  return (
    <Flex>
      <FlatList
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        contentContainerStyle={{
          height: Mixins.WINDOW_HEIGHT * 0.55,
          paddingHorizontal: Spacing.WRAP
        }}
        data={moviesList}
        snapToInterval={Mixins.WINDOW_WIDTH * 0.65 + Spacing.WRAP}
        decelerationRate="fast"
        removeClippedSubviews
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <Flex style={{ paddingHorizontal: 10 }}></Flex>
        )}
        style={{ width: "100%" }}
        horizontal
        bounces={false}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")}>
            <CardSlider data={item} isActive={index === activeItemIndex} />
          </TouchableOpacity>
        )}
      />

      <Flex
        dir="row"
        justifyContent="center"
        style={{ width: "100%", marginBottom: 20, marginTop: 20 }}
      >
        {moviesList.map((item, index) => (
          <Indicator isActive={index === activeItemIndex} key={index} />
        ))}
      </Flex>
    </Flex>
  );
};

const Thrailers = ({ thrailersList }) => {
  const navigation = useNavigation();

  return (
    <>
      <SectionHeading title="thrailers" />

      <FlatList
        data={thrailersList}
        contentContainerStyle={{ marginBottom: 40 }}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        ItemSeparatorComponent={() => (
          <Flex style={{ paddingHorizontal: 10 }}></Flex>
        )}
        showsHorizontalScrollIndicator={false}
        style={{ paddingHorizontal: Spacing.WRAP }}
        renderItem={({ item, index }) => <ThrailerCard />}
      />
    </>
  );
};

const NewMovies = ({ newMoviesList }) => {
  return (
    <>
      <SectionHeading title="Opening This Week" />

      <Flex
        style={{ paddingHorizontal: Spacing.WRAP, flexWrap: "wrap" }}
        layout="space-between flex-start"
        dir="row"
      >
        {newMoviesList.map(item => (
          <Flex style={{ width: "48%", marginBottom: 30 }} key={item.id}>
            <MovieCard data={item} />
          </Flex>
        ))}
      </Flex>
    </>
  );
};

const Movies = ({ moviesList, thrailersList, newMoviesList }) => {
  return (
    <>
      <Slider moviesList={moviesList} />

      <Thrailers thrailersList={thrailersList} />

      <NewMovies newMoviesList={newMoviesList} />
    </>
  );
};

export default AppHOC(Movies, {
  headerTitle: "Movies",
  HeaderRight: SearchButton,
  hero: true,
  headerTop: 12
});
