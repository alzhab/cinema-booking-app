import React from "react";
import { Button } from "molecules";
import { Icon } from "native-base";
import { Colors } from "styles";
import { useNavigation } from "@react-navigation/native";

const SearchButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      style={{ width: null }}
      gradientStyle={{ padding: 10, borderRadius: 25 }}
      full
      button={{
        onPress: () => {
          navigation.navigate("MoviesSearch");
        }
      }}
    >
      <Icon type="Feather" name="search" style={{ color: Colors.MAIN_TEXT }} />
    </Button>
  );
};

export default SearchButton;
