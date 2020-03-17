//TODO AUTH HOC SEARCH COMPONENT
import React from "react";
import { Container, Flex } from "atoms";
import {
  ScrollView,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Image
} from "react-native";
import { AppHeader, Loading } from "molecules";
import { Mixins, Colors } from "styles";

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
    return (
      <>
        {loadingScreens.includes(screenName) && <Loading />}

        <Container style={{ flex: 1 }}>
          {hero && (
            <Flex
              style={{
                position: "absolute",
                zIndex: 1,
                top: 0,
                left: 0,
                right: 0,
                height: hero.height ? hero.height : Mixins.WINDOW_HEIGHT * 0.5,
                backgroundColor: Colors.SECOND_BG,
                borderBottomLeftRadius: 25,
                borderBottomRightRadius: 25,
                overflow: "hidden"
              }}
            >
              {hero.image && (
                <Image
                  source={hero.image}
                  style={
                    (StyleSheet.absoluteFill, { width: "100%", height: "100%" })
                  }
                />
              )}
            </Flex>
          )}

          <ScrollView
            nestedScrollEnabled
            style={{
              position: "relative",
              zIndex: 2,
              marginBottom: Mixins.WINDOW_HEIGHT * 0.05 + 65 + 30 + 10
            }}
          >
            <AppHeader
              headerTitle={headerTitle}
              HeaderRight={HeaderRight}
              back={back}
              style={{
                paddingTop: headerTop
                  ? Mixins.WINDOW_HEIGHT * 0.02 - headerTop
                  : Mixins.WINDOW_HEIGHT * 0.02
              }}
            />

            <Component {...props} />
          </ScrollView>
        </Container>
      </>
    );
  };
};

export default AppHOC;
