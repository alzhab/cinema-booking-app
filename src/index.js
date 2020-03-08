import React, { Component } from 'react'
import Navigator from 'navigations'
import store from './redux'
import { Provider } from 'react-redux'
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { Container, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
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
            <Navigator />
          </Container>
        </StyleProvider>
      </Provider>
    )
  }
}

export default Main