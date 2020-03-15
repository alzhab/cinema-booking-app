import React, { useState } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing } from "styles";
import { ListItem, List, Left, Right, Icon } from "native-base";
import { Colors } from "styles";
import { InputGroup } from "molecules";

const LanguageItem = ({ lang, isActive }) => {
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
          {lang}
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

const Language = ({ activeLanguage, languagesList }) => {
  activeLanguage = "English";
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
        {languagesList
          .filter(lang => lang.toUpperCase().includes(filter.toUpperCase()))
          .map(lang => (
            <LanguageItem
              key={lang}
              lang={lang}
              isActive={lang === activeLanguage}
            />
          ))}
      </List>
    </>
  );
};

export default AppHOC(Language, "Language", true);
