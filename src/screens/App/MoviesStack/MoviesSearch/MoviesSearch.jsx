import React, { useState, useEffect } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing, Colors } from "styles";
import { Input } from "native-base";
import { MovieCard } from "molecules";

const SearchInput = ({ value, setValue }) => {
  return (
    <Flex
      style={{
        backgroundColor: Colors.SECOND_BG,
        width: "100%",
        borderRadius: 50,
        paddingHorizontal: Spacing.WRAP,
        paddingVertical: 5,
        marginBottom: 20
      }}
    >
      <Input
        placeholder="Search..."
        placeholderTextColor={Colors.SECOND_TEXT}
        style={{ color: Colors.MAIN_TEXT, width: "100%" }}
        value={value}
        onChange={e => {
          setValue(e.nativeEvent.text);
        }}
      />
    </Flex>
  );
};

const MoviesResult = ({ list }) => {
  return (
    <Flex
      style={{ width: "100%", flexWrap: "wrap" }}
      dir="row"
      layout="space-between center"
    >
      {list.length ? (
        list.map(item => (
          <Flex style={{ width: "48%", marginBottom: 30 }} key={item.id}>
            <MovieCard data={item} />
          </Flex>
        ))
      ) : (
        <Text full align="center" size={20}>
          No Result
        </Text>
      )}
    </Flex>
  );
};

const MoviesSearch = ({ movies }) => {
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    console.log(search);

    if (search.length > 3) {
      const newList = movies.filter(item =>
        item.title.toUpperCase().includes(search.toUpperCase())
      );
      setFilteredMovies(newList);
    } else {
      setFilteredMovies(movies);
    }
  }, [search]);

  return (
    <Flex style={{ paddingHorizontal: Spacing.WRAP }}>
      <SearchInput value={search} setValue={setSearch} />

      <MoviesResult list={filteredMovies} />
    </Flex>
  );
};

export default AppHOC(MoviesSearch, {
  headerTitle: "Movie",
  back: true
});
