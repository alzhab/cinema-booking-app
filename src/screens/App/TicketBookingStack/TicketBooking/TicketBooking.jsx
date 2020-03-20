//TODO Продумать и перенести огику booking в redux
import React, { useState, useEffect } from "react";
import AppHOC from "../../AppHOC";
import { Flex, Text } from "atoms";
import { Spacing, Colors, Mixins } from "styles";
import { SectionHeading, Button, SelectButton } from "molecules";
import { FlatList, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SelectSection = ({ title, children, delay = 500 }) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.spring(animation, {
        toValue: 1,
        tension: 1,
        friction: 20
      })
    ]).start();
  }, []);

  const mlInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [Mixins.WINDOW_WIDTH, Spacing.WRAP]
  });

  return (
    <Flex style={{ marginBottom: 30 }}>
      <SectionHeading title={title} />

      <Animated.View
        style={{
          marginLeft: mlInterpolation,
          backgroundColor: Colors.SECOND_BG,
          paddingVertical: 15,
          width: "100%",
          borderRadius: 10
        }}
      >
        {children}
      </Animated.View>
    </Flex>
  );
};

const Dates = ({ value, setValue, list, delay }) => {
  return (
    <SelectSection title="tuesday 23, 2019" delay={delay}>
      <FlatList
        horizontal
        data={list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: Spacing.WRAP }}
        ItemSeparatorComponent={() => <Flex style={{ width: 20 }} />}
        renderItem={({ item, index }) => {
          return (
            <SelectButton
              mainText={item.dayNumber}
              secondText={item.dayName}
              active={value === index}
              onPress={() => setValue(index)}
            />
          );
        }}
      />
    </SelectSection>
  );
};

const Places = ({ value, setValue, list, delay }) => {
  return (
    <SelectSection title="Places" delay={delay}>
      <FlatList
        horizontal
        data={list}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ paddingHorizontal: Spacing.WRAP }}
        ItemSeparatorComponent={() => <Flex style={{ width: 20 }} />}
        renderItem={({ item, index }) => {
          return (
            <SelectButton
              disabledBg={Colors.MAIN_BG}
              mainText={item}
              active={value === index}
              onPress={() => setValue(index)}
            />
          );
        }}
      />
    </SelectSection>
  );
};

const SessionParams = ({
  typesValue,
  setTypesValue,
  typesList,
  timesValue,
  setTimesValue,
  timesList,
  delay
}) => {
  return (
    <SelectSection title="Session Type" delay={delay}>
      <FlatList
        horizontal
        data={typesList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{
          paddingHorizontal: Spacing.WRAP,
          marginBottom: 20
        }}
        ItemSeparatorComponent={() => <Flex style={{ width: 20 }} />}
        renderItem={({ item, index }) => {
          return (
            <SelectButton
              disabledBg={Colors.MAIN_BG}
              mainText={item}
              active={typesValue === index}
              onPress={() => setTypesValue(index)}
            />
          );
        }}
      />

      <SectionHeading title="Session Times" />

      <FlatList
        horizontal
        data={timesList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: Spacing.WRAP,
          marginBottom: 20
        }}
        ItemSeparatorComponent={() => <Flex style={{ width: 20 }} />}
        renderItem={({ item, index }) => {
          return (
            <SelectButton
              disabledBg={Colors.MAIN_BG}
              mainText={item.time}
              secondText={item.timeType}
              active={timesValue === index}
              onPress={() => setTimesValue(index)}
            />
          );
        }}
      />
    </SelectSection>
  );
};

const Seat = ({ back = "none", title }) => {
  let color1 = "";
  let color2 = "";

  switch (back) {
    case "none":
      color1 = color2 = Colors.MAIN_BG;
      break;
    case "white":
      color1 = color2 = Colors.MAIN_TEXT;
      break;
    case "active":
      color1 = "#fd5c48";
      color2 = "#9a38e7";
      break;
  }

  return (
    <Flex dir="row" layout="center center">
      <LinearGradient
        start={[0.1, 0]}
        end={[0.9, 0.0]}
        colors={[color1, color2]}
        style={{
          width: 30,
          height: 30,
          borderRadius: 5,
          borderWidth: back === "none" ? 2 : 0,
          marginRight: title ? 10 : 0,
          borderColor: "#353652",
          position: "relative"
        }}
      >
        {back === "none" && (
          <LinearGradient
            start={[0.1, 0]}
            end={[0.9, 0.0]}
            colors={["#353652", "#353652"]}
            style={{
              borderRadius: 5,
              borderWidth: back === "none" ? 2 : 0,
              borderColor: "#353652",
              position: "absolute",
              bottom: -2,
              left: -2,
              zIndex: 3,
              right: -2,
              height: 6,
              backgroundColor: "red"
            }}
          />
        )}
      </LinearGradient>
      {title && (
        <Text textTransform="uppercase" family="700" size={12}>
          {title}
        </Text>
      )}
    </Flex>
  );
};

const SeatsTableHeading = ({ data }) => {
  return (
    <Flex
      dir="row"
      style={{
        paddingHorizontal: Spacing.WRAP,
        marginBottom: 30,
        width: "100%"
      }}
      layout="space-between center"
    >
      <Seat title="reserved" back="white" />
      <Seat title="available" />
      <Seat title="selected" back="active" />
    </Flex>
  );
};

const SeatsTable = ({ row, column, space, setSeat }) => {
  return (
    <>
      <SeatsTableHeading />

      <Flex
        style={{
          backgroundColor: Colors.MAIN_TEXT,
          height: 3,
          borderRadius: 10,
          marginHorizontal: Spacing.WRAP
        }}
      />

      <Flex style={{ padding: Spacing.WRAP }}>
        {Mixins.emptyArray(row).map((item, index) => (
          <Flex
            key={index.toString()}
            style={{ marginBottom: Spacing.WRAP, width: "100%" }}
            dir="row"
            layout="space-between center"
          >
            {Mixins.emptyArray(column).map((item, index) => {
              return <Seat key={index.toString()} />;
            })}
          </Flex>
        ))}
      </Flex>
    </>
  );
};

const TicketBooking = ({ movies }) => {
  const dates = [
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 },
    { dayName: "mon", dayNumber: 22 }
  ];

  const places = ["place 1", "place 2", "place 3", "place 4"];

  const sessionTypes = ["3d", "IMAX 3D", "MX4D"];

  const times = [
    { time: "07:30", timeType: "am" },
    { time: "07:30", timeType: "am" },
    { time: "07:30", timeType: "am" },
    { time: "07:30", timeType: "am" },
    { time: "07:30", timeType: "am" }
  ];

  const [selectedDateId, setSelectedDateId] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [selectedSessionType, setSelectedSessionType] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);

  return (
    <>
      <Dates
        delay={500}
        list={dates}
        value={selectedDateId}
        setValue={setSelectedDateId}
      />

      <Places
        delay={1000}
        list={places}
        value={selectedPlace}
        setValue={setSelectedPlace}
      />

      <SessionParams
        delay={1500}
        typesList={sessionTypes}
        typesValue={selectedSessionType}
        setTypesValue={setSelectedSessionType}
        timesList={times}
        timesValue={selectedTime}
        setTimesValue={setSelectedTime}
      />

      <SeatsTable row={9} column={8} space={1} />

      <Button button={{ title: "submit" }} />
    </>
  );
};

export default AppHOC(TicketBooking, {
  headerTitle: "Ticket Booking",
  back: true,
  full: true
});
