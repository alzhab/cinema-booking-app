import React, { useState } from "react";
import { Text, Flex } from "atoms";
import { AuthHeading, Button, Input, SocialAuth, InputGroup } from "molecules";
import { Colors, Mixins, Spacing } from "styles";
import AuthHOC from "../AuthHOC";
import { Form } from "native-base";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HEADING = {
  main: "Create your Account",
  second: "Hello!"
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

const SignUp = ({ signUpFetch, setError }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputs = [
    {
      title: "User Name",
      placeholder: "username",
      type: "",
      value: username,
      setValue: setUsername
    },
    {
      title: "Email",
      placeholder: "username@mail.ru",
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
    },
    {
      title: "Confirm Password",
      placeholder: "min length 5",
      type: "password",
      value: confirmPassword,
      setValue: setConfirmPassword
    }
  ];

  const submit = () => {
    signUpFetch({ name: "username" });
  };

  return (
    <>
      <Form style={styles.form} justifyContent="center">
        <InputGroup data={inputs} />

        <Button
          button={{
            title: "Register Now",
            onPress: submit
          }}
          full
        />

        <SocialAuth target="signUp" />
      </Form>

      <SignUpLink />
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: Colors.SECOND_BG,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: Mixins.WINDOW_HEIGHT * 0.05,
    padding: Spacing.WRAP
  }
});

export default AuthHOC(SignUp, HEADING);
