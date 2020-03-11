import React from "react";
import { Logo } from "molecules";
import { Container } from "atoms";

const AuthHOC = Component => {
  return props => {
    return (
      <Container style={{ paddingTop: 25 }}>
        <Logo />
        <Component {...props} />
      </Container>
    );
  };
};

export default AuthHOC;
