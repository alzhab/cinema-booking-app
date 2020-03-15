import React, { useState } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing } from "styles";
import { ListItem, List, Left, Right, Icon } from "native-base";
import { Colors } from "styles";
import { InputGroup } from "molecules";

const CountryItem = ({ country, isActive }) => {
  return (
    <ListItem
      tint
      selected
      noIndent
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 15,
        justifyContent: "space-between"
      }}
    >
      <Left>
        <Text
          size={20}
          family="700"
          color={isActive ? Colors.MAIN_TEXT : Colors.SECOND_TEXT}
        >
          {country}
        </Text>
      </Left>
      {isActive && (
        <Right>
          <Icon
            type="Feather"
            name="check-circle"
            style={{ color: Colors.MAIN_TEXT, fontSize: 15 }}
          />
        </Right>
      )}
    </ListItem>
  );
};

const Country = ({ activeCountry, countriesList }) => {
  activeCountry = "New Zealand";
  const [filter, setFilter] = useState("");

  const inputs = [
    {
      title: "Filter",
      placeholder: "min 3 char",
      type: "",
      value: filter,
      setValue: setFilter
    }
  ];

  return (
    <>
      <List
        style={{
          marginHorizontal: Spacing.WRAP
        }}
      >
        <InputGroup data={inputs} />
        {countriesList
          .filter(country =>
            country.toUpperCase().includes(filter.toUpperCase())
          )
          .map(country => (
            <CountryItem
              key={country}
              country={country}
              isActive={country === activeCountry}
            />
          ))}
      </List>
    </>
  );
};

export default AppHOC(Country, "Country", true);
