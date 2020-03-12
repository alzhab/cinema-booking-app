import React from "react";
import { Logo } from "molecules";
import { Container } from "atoms";
import { ScrollView } from "react-native-gesture-handler";

const AuthHOC = Component => {
  return props => {
    return (
      <Container style={{ paddingTop: 25 }}>
        <ScrollView>
          <Logo />
          <Component {...props} />
        </ScrollView>
      </Container>
    );
  };
};

export default AuthHOC;
