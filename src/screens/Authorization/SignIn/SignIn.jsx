import React from "react";
import { Form } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text, Container } from "atoms";
import { AuthHeading, Button, Input, Loading, AlertMessage } from "molecules";
import { Colors, Mixins, Spacing } from "styles";
import AuthHOC from "../AuthHOC";

const Inputs = () => {
  return (
    <>
      <Input title="Email ID" placeholder="example@gmail.com" type="email" />
      <Input title="Password" placeholder="" type="password" />
    </>
  );
};

const ForgotPasswordLink = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ResetPassword");
      }}
    >
      <Text
        full
        align="right"
        color="active"
        size={16}
        family="700"
        style={{ marginBottom: 25 }}
      >
        Forgot Password?
      </Text>
    </TouchableOpacity>
  );
};

const SignUpLink = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignUp");
      }}
      style={{ paddingBottom: 25 }}
    >
      <Text align="center" full family="700" color="second" size={15}>
        Don't have an account? <Text color="second_active">Register Now</Text>
      </Text>
    </TouchableOpacity>
  );
};

const SocialLogin = () => {
  return (
    <Text
      full
      align="center"
      family="700"
      style={{ marginVertical: 20 }}
      size={15}
    >
      Or Login using Social Media
    </Text>
  );
};

const SignIn = ({ loginFetchLoading, loginFetch, error }) => {
  return (
    <>
      {loginFetchLoading && <Loading />}

      <AlertMessage
        message={error}
        color={Colors.MAIN_TEXT}
        bgColor={Colors.ACTIVE}
      />

      <Container style={{ width: "100%", paddingHorizontal: Spacing.WRAP }}>
        <AuthHeading main="Create your Account" second="Welcome Back!" />

        <Form
          style={{
            backgroundColor: Colors.SECOND_BG,
            borderRadius: 20,
            marginTop: 20,
            marginBottom: Mixins.WINDOW_HEIGHT * 0.05,
            padding: Spacing.WRAP
          }}
          justifyContent="center"
        >
          <Inputs />

          <ForgotPasswordLink />

          <Button
            button={{
              title: "Login",
              onPress: () => {
                loginFetch({ username: "user" });
              }
            }}
            full
          />

          <SocialLogin />
        </Form>

        <SignUpLink />
      </Container>
    </>
  );
};

export default AuthHOC(SignIn);
