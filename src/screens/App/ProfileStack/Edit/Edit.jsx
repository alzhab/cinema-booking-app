import React, { useState } from "react";
import { Image } from "react-native";
import AppHOC from "../../AppHOC";
import { Mixins } from "styles";
import { Flex, Text } from "atoms";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form } from "native-base";
import { InputGroup } from "molecules";
import { Spacing } from "styles";
import { Button } from "molecules";

const ProfilePicture = () => {
  return (
    <Flex layout="center center" style={{ marginBottom: 40 }}>
      <Image
        source={require("assets/images/avatar.jpg")}
        style={{
          borderRadius: Mixins.WINDOW_WIDTH * 0.3,
          width: Mixins.WINDOW_WIDTH * 0.3,
          height: Mixins.WINDOW_WIDTH * 0.3,
          marginBottom: 20
        }}
      />

      <TouchableOpacity
        onPress={() => {}}
        style={{ borderBottomWidth: 1, borderBottomColor: "#e5534c" }}
      >
        <Text full color="#e5534c" align="center" family="700" size={20}>
          Change Profile Picture
        </Text>
      </TouchableOpacity>
    </Flex>
  );
};

const Edit = () => {
  const [fullName, setFullName] = useState("Theodre Handle");
  const [email, setEmail] = useState("thodre@gmail.com");

  const inputs = [
    {
      title: "Full Name",
      placeholder: "",
      type: "",
      value: fullName,
      setValue: setFullName
    },
    {
      title: "Email",
      placeholder: "",
      type: "email",
      value: email,
      setValue: setEmail
    }
  ];

  return (
    <>
      <ProfilePicture />

      <Form
        style={{
          marginHorizontal: Spacing.WRAP
        }}
      >
        <InputGroup data={inputs} />

        <Button button={{ title: "save changes", onPress: () => {} }} />
      </Form>
    </>
  );
};

export default AppHOC(Edit, "Edit", true);
