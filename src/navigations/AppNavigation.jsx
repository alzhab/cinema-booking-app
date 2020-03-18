//TODO Ticket Booking Navigator

import React from "react";
import { Movies, Notifications, Favorites } from "screens";
import { connect } from "react-redux";
import { TabBar } from "organisms";
import ProfileNavigation from "./ProfileNavigation";
import MoviesNavigation from "./MoviesNavigation";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import BottomBarNavigation from "./BottomBarNavigation";
import { MoviesSearch } from "screens";

const App = createStackNavigator();

function AppNavigator({ loadingScreens }) {
  return (
    <App.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid
      }}
    >
      <App.Screen name="App" component={BottomBarNavigation} />
      <App.Screen name="MoviesSearch" component={MoviesSearch} />
    </App.Navigator>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { loadingScreens } = state.appReducer;

  return { loadingScreens };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
