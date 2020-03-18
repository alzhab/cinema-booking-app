import React, { useState } from "react";
import {
  Container,
  Flex
} from "../TicketBookingStack/Payment/node_modules/atoms";
import { ScrollView, StyleSheet, Animated, Image, Easing } from "react-native";
import { AppHeader, Loading } from "molecules";
import {
  Mixins,
  Colors
} from "../TicketBookingStack/Payment/node_modules/styles";
import { LinearGradient } from "expo-linear-gradient";

const AppHOC = (Component, options) => {
  const {
    headerTitle = "screen title",
    back = false,
    HeaderRight = null,
    headerTop = 0,
    hero = null,
    screenName = headerTitle.replace(/ /g, "")
  } = options;

  return ({ loadingScreens, ...props }) => {
    const [bannerHeight, setBannerHeight] = useState(
      new Animated.Value(Mixins.WINDOW_HEIGHT * 0.5)
    );

    const scrollHandler = e => {
      if (hero) {
        const headerPadding = headerTop
          ? Mixins.WINDOW_HEIGHT * 0.02 - headerTop
          : Mixins.WINDOW_HEIGHT * 0.02;
        const headerMargin = Mixins.WINDOW_HEIGHT * 0.03;
        const headerIconHeight = 30;
        const headerHeight = headerPadding + headerMargin + headerIconHeight;

        const bannerMaxHeight = Mixins.WINDOW_HEIGHT * 0.5;
        const maxScroll = bannerMaxHeight - headerHeight;

        const currentYPosition = e.nativeEvent.contentOffset.y;

        if (currentYPosition > maxScroll - headerHeight) {
          return;
        }

        const newHeight = bannerMaxHeight - currentYPosition;

        Animated.spring(bannerHeight, {
          toValue: newHeight,
          duration: 10,
          easing: Easing.in
        }).start();
      }
    };

    return (
      <>
        {loadingScreens.includes(screenName) && <Loading />}

        <Container style={{ flex: 1 }}>
          {hero && (
            <Animated.View
              style={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
                height: bannerHeight,
                backgroundColor: Colors.SECOND_BG,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                overflow: "hidden"
              }}
            >
              {hero.image && (
                <>
                  <Image
                    source={hero.image}
                    style={
                      (StyleSheet.absoluteFill,
                      { width: "100%", height: "100%" })
                    }
                  />
                  <LinearGradient
                    colors={["#fd5c4870", "#9a38e770"]}
                    style={StyleSheet.absoluteFill}
                  ></LinearGradient>
                </>
              )}
            </Animated.View>
          )}

          <AppHeader
            headerTitle={headerTitle}
            HeaderRight={HeaderRight}
            back={back}
            style={{
              position: "relative",
              zIndex: 3,
              paddingTop: headerTop
                ? Mixins.WINDOW_HEIGHT * 0.02 - headerTop
                : Mixins.WINDOW_HEIGHT * 0.02
            }}
          />

          <ScrollView
            overScrollMode="never"
            nestedScrollEnabled
            scrollEventThrottle={1}
            onScroll={scrollHandler}
            style={{
              position: "relative",
              zIndex: 2,
              marginBottom: Mixins.WINDOW_HEIGHT * 0.05 + 65 + 30 + 10
            }}
          >
            <Component {...props} />
          </ScrollView>
        </Container>
      </>
    );
  };
};

export default AppHOC;
