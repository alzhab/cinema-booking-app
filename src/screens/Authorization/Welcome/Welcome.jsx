import React, { useState } from "react";
import { Button } from "native-base";
import { Text, Container, Flex } from "atoms";
import { Spacing, Mixins } from "styles";
import { Image, FlatList } from "react-native";
import { Logo } from "molecules";

const Info = ({ title, text, image }) => (
  <Flex layout="center center" style={{ width: Mixins.WINDOW_WIDTH }}>
    <Flex
      style={{
        height: Mixins.WINDOW_HEIGHT * 0.5,
        width: Mixins.WINDOW_WIDTH * 0.8
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Image
        source={image}
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
      />
    </Flex>

    <Text
      textTransform="uppercase"
      size={25}
      family="line"
      align="center"
      style={{ marginBottom: 15 }}
    >
      {title}
    </Text>

    <Text
      align="center"
      size={12}
      lineHeight={1.3}
      style={{ paddingHorizontal: Spacing.WRAP }}
    >
      {text}
    </Text>
  </Flex>
);

const ScrollIndicator = ({ isActive }) => (
  <Flex
    layout="center center"
    style={{
      width: 18,
      height: 18,
      borderRadius: 18,
      borderWidth: 2,
      borderColor: "#f8aa25",
      marginHorizontal: 13
    }}
  >
    {isActive && (
      <Flex
        style={{
          backgroundColor: "#f8aa25",
          width: "50%",
          height: "50%"
        }}
      ></Flex>
    )}
  </Flex>
);

const ScrollIndicators = ({ active, data }) => (
  <Flex layout="center center" style={{ width: "100%" }} dir="row">
    {data.map((item, index) => (
      <ScrollIndicator isActive={index === active} />
    ))}
  </Flex>
);

const Welcome = ({ infoList }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length === 1) {
      setActiveItemIndex(viewableItems[0].index);
      console.log("index: ", viewableItems[0].index);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 60 });

  return (
    <Container
      style={{
        alignItems: "center",
        justifyContent: "flex-end"
      }}
    >
      <Logo />
      <Flex style={{ height: "72%" }}>
        <FlatList
          contentContainerStyle={{ marginBottom: 50 }}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={infoList}
          keyExtractor={item => item.id}
          snapToInterval={Mixins.WINDOW_WIDTH}
          snapToAlignment="center"
          decelerationRate={0}
          renderItem={({ item }) => (
            <Info
              key={item.id}
              title={item.title}
              text={item.text}
              image={item.image}
            />
          )}
        />
        <ScrollIndicators active={activeItemIndex} data={infoList} />
      </Flex>
    </Container>
  );
};

export default Welcome;
