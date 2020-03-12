import React from "react";
import { Logo, AlertMessage, Loading, AuthHeading } from "molecules";
import { Container, Flex } from "atoms";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Spacing } from "styles";

const AuthHOC = (Component, heading, isForm) => {
  return ({ error, loading, setError, ...props }) => {
    const Content = isForm ? (
      <Container style={{ paddingTop: 25, flex: 1 }}>
        <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
          <Logo />
          <Component {...props} />
        </ScrollView>
      </Container>
    ) : (
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

    return Content;
  };
};

export default AuthHOC;
