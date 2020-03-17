import React from 'react'
import { Flex, Text } from 'atoms';
import { Image, StyleSheet } from 'react-native';

const MovieCard = ({ data }) => {
    return (
      <Flex style={{ width: "48%", marginBottom: 30 }}>
        <Flex
          style={{
            borderRadius: 45,
            height: 300,
            width: "100%",
            overflow: "hidden",
            marginBottom: 15
          }}
        >
          <Image
            source={data.image}
            style={[StyleSheet.absoluteFill, { width: "100%", height: "100%" }]}
          />
        </Flex>
        <Text
          align="center"
          full
          family="700"
          size={18}
          maxLines={1}
          style={{ marginBottom: 5 }}
        >
          {data.title}
        </Text>
  
        <Text align="center" full size={14} textTransform="capitalize">
          {data.tags.join(", ")}
        </Text>
      </Flex>
    );
  };

export default MovieCard
