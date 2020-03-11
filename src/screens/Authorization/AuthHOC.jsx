import React from "react";
import { Logo } from "molecules";
import { Container } from "atoms";

const AuthHOC = Component => {
  return props => {
    return (
      <Container
        style={{
          alignItems: "center",
          justifyContent: "flex-start"
        }}
      >
        <Logo style={{ padding: 25 }} />
        <Component {...props} />
      </Container>
    );
  };
};

export default AuthHOC;
