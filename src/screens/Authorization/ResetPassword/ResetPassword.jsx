import React, { useState } from "react";
import { Text, Flex } from "atoms";
import { Button, Input, InputGroup } from "molecules";
import { Colors, Mixins, Spacing } from "styles";
import AuthHOC from "../AuthHOC";
import { Form } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HEADING = {
  main: "Reset Your Password",
  second: "Forgot?"
};

const Inputs = ({ codeChecked, emailChecked }) => {
  return (
    // Этапы смены пароля
    <>
      {!emailChecked && (
        <Input title="Email ID" placeholder="example@gmail.com" type="email" />
      )}
      {!codeChecked && emailChecked && (
        <Input title="Code" placeholder="wait for 1 minute" />
      )}
      {emailChecked && codeChecked && (
        <>
          <Input title="New Password" placeholder="" type="password" />
          <Input title="Confirm Password" placeholder="" type="password" />
        </>
      )}
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
      style={{ paddingBottom: 25 }}
    >
      <Text align="center" full family="700" color="second" size={15}>
        Already have an account? <Text color="second_active">Login</Text>
      </Text>
    </TouchableOpacity>
  );
};

const ResetPassword = ({
  codeChecked,
  emailChecked,
  checkCode,
  checkEmail,
  changePassword,
  resetCheck
}) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const inputs = [
    {
      title: "Email",
      placeholder: "something@gmail.com",
      type: "",
      value: email,
      setValue: setEmail,
      hide: emailChecked
    },
    {
      title: "Code",
      placeholder: "username",
      type: "",
      value: code,
      setValue: setCode,
      hide: !emailChecked || codeChecked
    },
    {
      title: "New Password",
      placeholder: "username",
      type: "",
      value: newPassword,
      setValue: setNewPassword,
      hide: !emailChecked || !codeChecked
    },
    {
      title: "Confirm Password",
      placeholder: "username",
      type: "",
      value: confirmNewPassword,
      setValue: setConfirmNewPassword,
      hide: !emailChecked || !codeChecked
    }
  ];

  // Смена текста в зависимости от этапа смены пароля
  let buttonTitle = "";

  if (!emailChecked) {
    buttonTitle = "Send Code";
  }

  if (emailChecked && !codeChecked) {
    buttonTitle = "Check Code";
  }

  if (emailChecked && codeChecked) {
    buttonTitle = "Reset Password";
  }

  // отправка запроса в зависимости от этапа смены пароля
  const submit = () => {
    if (!emailChecked) {
      checkEmail("email");
    }

    if (emailChecked && !codeChecked) {
      checkCode({ code: "code", email: "email" });
    }

    if (emailChecked && codeChecked) {
      changePassword({ newPassword: "password", email: "email" });
    }
  };

  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      resetCheck();
    });

    return unsubscribe;
  }, [navigation]);

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

        <Button button={{ title: buttonTitle, onPress: submit }} full />
      </Form>

      <SignInLink />
    </>
  );
};

export default AuthHOC(ResetPassword, HEADING);
