//TODO AUTH HOC LOADING COMPONENT
//TODO AUTH HOC HEADER COMPONENT
//TODO AUTH HOC SEARCH COMPONENT
import React from "react";
import { Container } from "atoms";
import { ScrollView } from "react-native";

const AppHOC = Component => {
  return props => {
    return (
      <Container style={{ flex: 1 }}>
        <ScrollView>
          <Component {...props} />
        </ScrollView>
      </Container>
    );
  };
};

export default AppHOC;
