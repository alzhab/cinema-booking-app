import React from "react";
import AppHOC from "../AppHOC";
import { SearchButton } from "organisms";
import { SectionHeading, MovieCard } from "molecules";
import { Flex } from "atoms";
import { Spacing, Colors } from "styles";

const Movies = ({ list }) => {
  return (
    <Flex
      style={{ paddingHorizontal: Spacing.WRAP, flexWrap: "wrap" }}
      layout="space-between flex-start"
      dir="row"
    >
      {list.map(item => (
        <Flex style={{ width: "48%", marginBottom: 30 }} key={item.id}>
          <MovieCard data={item} />
        </Flex>
      ))}
    </Flex>
  );
};

const Category = ({ movies, title }) => {
  return (
    <>
      <SectionHeading title={title} rightButton rightTitle="view all" />

      <Movies list={movies} />
    </>
  );
};

const Favorites = ({ movies }) => {
  return (
    <>
      <Category movies={movies} title="action" />
      <Flex
        style={{
          height: 0.5,
          width: "100%",
          marginBottom: 30,
          backgroundColor: Colors.SECOND_TEXT,
          opacity: 0.5
        }}
      />
      <Category movies={movies} title="animation" />
      <Flex
        style={{
          height: 0.5,
          width: "100%",
          marginBottom: 30,
          backgroundColor: Colors.SECOND_TEXT,
          opacity: 0.5
        }}
      />
      <Category movies={movies} title="animation" />
    </>
  );
};

export default AppHOC(Favorites, {
  headerTitle: "Favorites",
  HeaderRight: SearchButton,
  headerTop: 12
});
