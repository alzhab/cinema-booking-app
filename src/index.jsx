import React, { Component } from "react";
import Navigator from "navigations";
import store from "./redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { Container, StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import commonColor from "./native-base-theme/variables/commonColor";
import { StatusBar } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Muli: require("assets/fonts/Muli/static/Muli-Regular.ttf"),
      Muli_Bold: require("./assets/fonts/Muli/static/Muli-ExtraBold.ttf"),
      Bungee: require("assets/fonts/Bungee_Inline/BungeeInline-Regular.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(commonColor)}>
          <Container>
            <StatusBar
              translucent={true}
              barStyle="light-content"
              backgroundColor={Colors.MAIN_BG}
            />
            <Navigator />
          </Container>
        </StyleProvider>
      </Provider>
    );
  }
}

export default Main;
