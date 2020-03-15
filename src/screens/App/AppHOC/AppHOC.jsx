//TODO AUTH HOC SEARCH COMPONENT
import React from "react";
import { Container } from "atoms";
import { ScrollView } from "react-native";
import { AppHeader, Loading } from "molecules";

const AppHOC = (
  Component,
  headerTitle = "screen title",
  back = false,
  HeaderRight = null,
  screenName = headerTitle
) => {
  return ({ loadingScreens, ...props }) => {
    return (
      <>
        {loadingScreens.includes(screenName) && <Loading />}
        <Container style={{ flex: 1 }}>
          <ScrollView>
            <AppHeader
              headerTitle={headerTitle}
              HeaderRight={HeaderRight}
              back={back}
            />

            <Component {...props} />
          </ScrollView>
        </Container>
      </>
    );
  };
};

export default AppHOC;
