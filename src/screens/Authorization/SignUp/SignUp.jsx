import React from "react";
import { Text, Flex } from "atoms";
import { AuthHeading, Button, Input } from "molecules";
import { Colors, Mixins, Spacing } from "styles";
import AuthHOC from "../AuthHOC";
import { Form } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HEADING = {
  main: "Create your Account",
  second: "Hello!"
};

const Inputs = () => {
  return (
    <>
      <Input title="User Name" placeholder="login" />
      <Input title="Email ID" placeholder="example@gmail.com" type="email" />
      <Input title="Password" placeholder="" type="password" />
    </>
  );
};

const SignUpLink = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignIn");
      }}
      style={{ paddingBottom: 25 }}
    >
      <Text align="center" full family="700" color="second" size={15}>
        Already have an account? <Text color="second_active">Login</Text>
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
      Or Register using Social Media
    </Text>
  );
};

const SignUp = ({ signUpFetch }) => {
  return (
    <>
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

        <Button
          button={{
            title: "Register Now",
            onPress: () => signUpFetch({ name: "username" })
          }}
          full
        />

        <SocialLogin />
      </Form>

      <SignUpLink />
    </>
  );
};

export default AuthHOC(SignUp, HEADING);
