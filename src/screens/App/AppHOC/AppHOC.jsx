//TODO AUTH HOC LOADING COMPONENT
//TODO AUTH HOC HEADER COMPONENT
//TODO AUTH HOC SEARCH COMPONENT
import React from "react";
import { Container, Flex, Text } from "atoms";
import { ScrollView } from "react-native";
import { Spacing, Mixins } from "styles";

const AppHOC = (
  Component,
  headerTitle = "screen title",
  HeaderRight = null
) => {
  return props => {
    return (
      <Container style={{ flex: 1 }}>
        <ScrollView>
          <Flex
            dir="row"
            layout="space-between center"
            style={{
              paddingHorizontal: Spacing.WRAP,
              paddingTop: Mixins.WINDOW_HEIGHT * 0.02,
              marginBottom: Mixins.WINDOW_HEIGHT * 0.03
            }}
          >
            <Text family="700" size={25} textTransform="capitalize">
              {headerTitle}
            </Text>

            {HeaderRight ? <HeaderRight /> : null}
          </Flex>

          <Component {...props} />
        </ScrollView>
      </Container>
    );
  };
};

export default AppHOC;
