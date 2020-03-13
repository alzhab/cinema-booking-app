import React, { useState } from "react";
import { Form } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Text } from "atoms";
import { Button, SocialAuth, InputGroup } from "molecules";
import { Colors, Mixins, Spacing } from "styles";
import AuthHOC from "../AuthHOC";

const HEADING = {
  main: "Create your Account",
  second: "Welcome Back!"
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

const SignIn = ({ SignInFetch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  // Определяем поля формы
  const inputs = [
    {
      title: "Email ID",
      placeholder: "example@gmail.com",
      type: "email",
      value: email,
      setValue: setEmail
    },
    {
      title: "Password",
      placeholder: "min length 5",
      type: "password",
      value: password,
      setValue: setPassword
    }
  ];

  const submit = () => {
    SignInFetch({ email, password }).then(res => {
      if (res !== "error") {
        //TODO должен перенаправлять на главную страницу
        navigation.navigate("SignUp");
      }
    });
  };

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
        <InputGroup data={inputs} />

        <ForgotPasswordLink />

        <Button
          button={{
            title: "Login",
            onPress: submit
          }}
          full
        />

        <SocialAuth target="signIn" />
      </Form>

      <SignUpLink />
    </>
  );
};

export default AuthHOC(SignIn, HEADING);
