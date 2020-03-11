import React from "react";
import { Text, Flex } from "atoms";
import { AuthHeading, Button, Input } from "molecules";
import { Colors, Mixins, Spacing } from "styles";
import AuthHOC from "../AuthHOC";
import { Container } from "atoms";
import { Form } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Inputs = () => {
  return (
    <>
      <Input title="Email ID" placeholder="example@gmail.com" type="email" />
      <Input title="New Password" placeholder="" type="password" />
      <Input title="Confirm Password" placeholder="" type="password" />
    </>
  );
};

const SignInLink = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignIn");
      }}
    >
      <Text align="center" full family="700" color="second" size={15}>
        Already have an account? <Text color="second_active">Login</Text>
      </Text>
    </TouchableOpacity>
  );
};

const ResetPassword = () => {
  return (
    <Container style={{ width: "100%", paddingHorizontal: Spacing.WRAP }}>
      <AuthHeading main="Reset Your Password" second="Forgot?" />

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

        <Button button={{ title: "Reset Password" }} full />
      </Form>

      <SignInLink />
    </Container>
  );
};

export default AuthHOC(ResetPassword);
