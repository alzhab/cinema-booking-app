import React, { useState } from "react";
import AppHOC from "../../AppHOC";
import { useNavigation } from "@react-navigation/native";
import { Flex, Text } from "atoms";
import { TouchableOpacity, Image } from "react-native";
import { Spacing } from "styles";
import { Icon, List, ListItem, Switch } from "native-base";
import { Colors, Mixins } from "styles";

const UserInfo = () => {
  return (
    <Flex
      dir="row"
      alignItems="center"
      style={{ paddingHorizontal: Spacing.WRAP, marginBottom: 40 }}
    >
      <Image
        source={require("assets/images/avatar.jpg")}
        style={{
          borderRadius: Mixins.WINDOW_WIDTH * 0.25,
          width: Mixins.WINDOW_WIDTH * 0.25,
          height: Mixins.WINDOW_WIDTH * 0.25,
          marginRight: 20
        }}
      />

      <Flex>
        <Text family="700" size={20} style={{ marginBottom: 10 }}>
          Theodre Handle
        </Text>

        <Flex dir="row" alignItems="center" style={{ marginBottom: 10 }}>
          <Icon
            type="Feather"
            name="map-pin"
            style={{
              fontSize: 11,
              color: Colors.MAIN_TEXT,
              marginRight: 5
            }}
          />
          <Text family="700" size={12}>
            Washington Jackson, Pensnsylvania
          </Text>
        </Flex>

        <Flex dir="row" alignItems="center">
          <Icon
            type="Feather"
            name="mail"
            style={{ fontSize: 11, color: Colors.MAIN_TEXT, marginRight: 5 }}
          />
          <Text family="700" size={12}>
            theodre@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const EditButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Edit");
      }}
    >
      <Text color="active" size={15} family="700">
        Edit
      </Text>
    </TouchableOpacity>
  );
};

const NavItem = ({ data }) => {
  return data.switch ? (
    <ListItem
      noIndent
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 15,
        justifyContent: "space-between"
      }}
    >
      <Text color="second" family="700" size={18}>
        {data.title}
      </Text>
      <Switch
        value={data.switchValue}
        trackColor={{ true: Colors.ACTIVE }}
        onChange={data.onPress}
      />
    </ListItem>
  ) : (
    <ListItem
      onPress={data.onPress}
      noIndent
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 15,
        justifyContent: "space-between"
      }}
    >
      <Text color="second" family="700" size={18}>
        {data.title}
      </Text>

      <Icon
        type="Feather"
        name="chevron-right"
        style={{ fontSize: 20, color: Colors.MAIN_TEXT }}
      />
    </ListItem>
  );
};

const Profile = ({ showNotifications, setNotifications, logout }) => {
  const navigation = useNavigation();

  const navbar = [
    {
      title: "Language",
      onPress: () => {
        navigation.navigate("Language");
      }
    },
    {
      title: "Notification",
      switch: true,
      switchValue: showNotifications,
      onPress: () => {
        setNotifications(!showNotifications);
      }
    },
    {
      title: "Country",
      onPress: () => {
        navigation.navigate("Country");
      }
    }
  ];

  return (
    <>
      <UserInfo />

      <List
        style={{
          backgroundColor: Colors.SECOND_BG,
          borderRadius: 20,
          padding: Spacing.WRAP,
          marginHorizontal: Spacing.WRAP
        }}
      >
        {navbar.map(item => (
          <NavItem key={item.title} data={item} />
        ))}

        <TouchableOpacity onPress={logout} style={{ marginTop: 15 }}>
          <Text
            family="700"
            align="center"
            full
            size={20}
            color={Colors.ACTIVE}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </List>
    </>
  );
};

export default AppHOC(Profile, {
  headerTitle: "Profile",
  HeaderRight: EditButton
});
