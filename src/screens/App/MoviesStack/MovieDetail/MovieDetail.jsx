import React, { useEffect } from "react";
import AppHOC from "../../AppHOC";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex, Text } from "atoms";
import { Spacing, Colors, Mixins } from "styles";
import { ThrailerCard, SectionHeading } from "molecules";
import { FlatList } from "react-native";
import { Icon } from "native-base";
import { TouchableOpacity } from "react-native";

const MovieInfo = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Flex
      style={{
        paddingBottom: Mixins.WINDOW_HEIGHT * 0.05,
        paddingTop: Mixins.WINDOW_HEIGHT * 0.235
      }}
    >
      <Flex
        dir="row"
        alignItems="center"
        style={{
          marginBottom: 15
        }}
      >
        <Text
          family="700"
          size={14}
          lineHeight={1.1}
          style={{
            paddingVertical: 5,
            paddingHorizontal: 13,
            borderRadius: 6,
            borderColor: Colors.MAIN_TEXT,
            borderWidth: 1.5,
            marginRight: 10
          }}
        >
          IMDb
        </Text>
        <Text family="700" size={18}>
          {data.rating}
        </Text>
      </Flex>

      <Flex style={{ width: "100%" }} dir="row" layout="space-between center">
        <Flex>
          <Text
            family="700"
            size={22}
            maxLines={1}
            style={{ marginBottom: 13 }}
          >
            {data.title}
          </Text>

          <Text size={18} textTransform="capitalize">
            {data.tags.join(", ")}
          </Text>
        </Flex>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TicketBookingNavigator");
          }}
          style={{
            padding: 10,
            backgroundColor: Colors.MAIN_TEXT,
            borderWidth: 2,
            borderRadius: 50
          }}
        >
          <Icon
            type="FontAwesome5"
            name="ticket-alt"
            style={{
              color: Colors.SECOND_BG
            }}
          />
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
};

const StatisticItem = ({ data }) => {
  return (
    <Flex layout="space-between center">
      <Text family="700" size={20} align="center">
        {data.number}
      </Text>
      <Text
        lineHeight={1.3}
        textTransform="capitalize"
        size={14}
        align="center"
      >
        {data.title}
      </Text>
    </Flex>
  );
};

const Statistic = ({ list }) => {
  return (
    <Flex
      dir="row"
      layout="space-around center"
      style={{ width: "100%", marginBottom: 30 }}
    >
      {list.map(item => (
        <StatisticItem data={item} key={item.title} />
      ))}
    </Flex>
  );
};

const DetailItem = ({ data }) => {
  return (
    <Flex dir="row">
      <Text textTransform="capitalize" style={{ width: 100 }}>
        {data.title}:
      </Text>
      <Text textTransform="capitalize" style={{ width: 135 }}>
        {typeof data.info === "string" ? data.info : data.info.join(", ")}
      </Text>
    </Flex>
  );
};

const Info = ({ list }) => {
  return (
    <Flex style={{ width: "100%" }} dir="row" layout="space-between stretch">
      <Flex layout="space-between flex-start">
        {list.map(item => (
          <DetailItem key={item.title} data={item} />
        ))}
      </Flex>

      <ThrailerCard
        style={{ height: 110, width: 110, borderRadius: 5 }}
        gradientOpacity="0.8"
      />
    </Flex>
  );
};

const Description = ({ data }) => {
  return (
    <Flex style={{ marginTop: 30 }}>
      <SectionHeading title="Synopsis" full />
      <Text size={13} lineHeight={2}>
        {data}
      </Text>
    </Flex>
  );
};

const ThrailersList = ({ list }) => {
  return (
    <Flex style={{ marginTop: 30 }}>
      <SectionHeading title="Video Stills" full />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Flex style={{ width: 15 }} />}
        data={list}
        renderItem={({ item }) => <ThrailerCard withGradient={false} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </Flex>
  );
};

const MovieDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const movie = {
    id: "1",
    image: require("assets/images/poster.jpg"),
    title: `Avengers`,
    rating: 8.5,
    tags: ["action", "crime", "thriller"],
    statistic: [
      {
        title: "duration",
        number: "01h 44min"
      },
      {
        title: "rotten tomatoes",
        number: "86%"
      },
      {
        title: "metacritics",
        number: "71%"
      }
    ],
    infoList: [
      {
        title: "release date",
        info: "jul 10, 2019"
      },
      {
        title: "Dirertor",
        info: "jul 10, 2019"
      },
      {
        title: "Writers",
        info: [
          "Dan Hernandez",
          "Benji Samit",
          "Rob Letterman",
          "B Derek Connolly"
        ]
      }
    ],
    text: `Use filler text thot hos been edited for length ond formot to motch thechorocteristics of reol content os closely os possible Relox ond do whot-ever fits wíth your desígn process desígn ís on evolutíonory process, ondfíller text ísust one tool ín your progress-pushíng orsenol. Use ít whereít mokes sense to use it, ond pull it once the noturol process`,
    thrailers: [{}, {}, {}]
  };

  return (
    <Flex style={{ paddingHorizontal: Spacing.WRAP }}>
      <MovieInfo data={movie} />
      <Statistic list={movie.statistic} />
      <Info list={movie.infoList} />
      <Description data={movie.text} />
      <ThrailersList list={movie.thrailers} />
    </Flex>
  );
};

export default AppHOC(MovieDetail, {
  headerTitle: "",
  back: true,
  hero: { image: require("assets/images/poster.jpg") }
});
