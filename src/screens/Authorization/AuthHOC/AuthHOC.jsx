import React, { useEffect } from "react";
import { Logo, AlertMessage, Loading, AuthHeading } from "molecules";
import { Container, Flex } from "atoms";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Spacing, Mixins } from "styles";

const AuthHOC = (Component, heading, isForm) => {
  return ({ error, loading, setError, ...props }) => {
    if (isForm) {
      return (
        <Container style={{ paddingTop: 25, flex: 1 }}>
          <ScrollView>
            <Logo style={{ marginTop: Mixins.WINDOW_HEIGHT * 0.05 }} />
            <Component {...props} />
          </ScrollView>
        </Container>
      );
    } else {
      return (
        <>
          {/* Экран загрузки */}
          {loading && <Loading />}

          {/* Сообщение */}
          <AlertMessage
            message={error}
            bgColor={Colors.ACTIVE}
            color={Colors.MAIN_TEXT}
            afterAlert={() => setError("")}
          />
          <Container style={{ paddingTop: 25, flex: 1 }}>
            <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
              <Logo />

              <Flex
                alignItems="stretch"
                style={{
                  width: null,
                  paddingHorizontal: Spacing.WRAP
                }}
              >
                <AuthHeading heading={heading} />
                <Component {...props} />
              </Flex>
            </ScrollView>
          </Container>
        </>
      );
    }
  };
};

export default AuthHOC;
