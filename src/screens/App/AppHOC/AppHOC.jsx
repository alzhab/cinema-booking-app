//TODO AUTH HOC SEARCH COMPONENT
import React from "react";
import { Container } from "atoms";
import { ScrollView } from "react-native";
import { AppHeader, Loading } from "molecules";

const AppHOC = (
  Component,
  headerTitle = "screen title",
  screenName = headerTitle,
  HeaderRight = null
) => {
  return ({ loadingScreens, ...props }) => {
    return (
      <>
        {loadingScreens.includes(screenName) && <Loading />}
        <Container style={{ flex: 1 }}>
          <ScrollView>
            <AppHeader headerTitle={headerTitle} HeaderRight={HeaderRight} />

            <Component {...props} />
          </ScrollView>
        </Container>
      </>
    );
  };
};

export default AppHOC;
