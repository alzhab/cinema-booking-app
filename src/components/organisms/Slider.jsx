import React, { useState } from "react";
import { Flex } from "atoms";
import { Mixins } from "styles";
import { FlatList } from "react-native";
import { SliderIndicators, Slide } from "molecules";

const Slider = ({ data }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const onViewRef = React.useRef(({ viewableItems }) => {
    if (viewableItems.length === 1) {
      setActiveItemIndex(viewableItems[0].index);
    }
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 60 });

  return (
    <Flex style={{ height: "72%" }}>
      <FlatList
        decelerationRate="fast"
        contentContainerStyle={{ marginBottom: 50 }}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => item.id}
        snapToInterval={Mixins.WINDOW_WIDTH}
        snapToAlignment="center"
        renderItem={({ item }) => (
          <Slide
            key={item.id}
            title={item.title}
            text={item.text}
            image={item.image}
            button={item.button}
          />
        )}
      />
      <SliderIndicators active={activeItemIndex} data={data} />
    </Flex>
  );
};

export default Slider;
