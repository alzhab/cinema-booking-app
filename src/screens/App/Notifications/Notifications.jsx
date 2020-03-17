import React from "react";
import AppHOC from "../AppHOC";
import { SectionHeading, MovieCard } from "molecules";
import { Flex } from "atoms";
import { Colors, Mixins, Spacing } from "styles";
import { SearchButton } from "organisms";

const Category = ({ list, title }) => {
  return (
    <>
      <SectionHeading title={title} />
      {list.map(movie => (
        <Flex style={{ width: "100%" }} key={movie.id}>
          <Flex style={{ paddingHorizontal: Spacing.WRAP, width: "100%" }}>
            <MovieCard data={movie} row />
            <Flex
              style={{
                width: "100%",
                height: 1,
                backgroundColor: "#474d6f",
                marginBottom: 15,
                marginTop: 5,
                opacity: 0.9
              }}
            ></Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

const Notifications = ({ movies }) => {
  return (
    <>
      <Category title="today released movies" list={movies} />
      <Category title="Register your Ticket for Upcoming Movie" list={movies} />
    </>
  );
};

export default AppHOC(Notifications, {
  headerTitle: "Notifications",
  back: true,
  hero: true,
  HeaderRight: SearchButton
});
