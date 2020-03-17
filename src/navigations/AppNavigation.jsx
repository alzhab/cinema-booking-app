//TODO Ticket Booking Navigator
//TODO Сменить AppNavigation на StackNavigator {TabBar && TicketScreen}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Movies, Notifications, Favorites } from "screens";
import { connect } from "react-redux";
import { TabBar } from "organisms";
import ProfileNavigation from "./ProfileNavigation";
import MoviesNavigation from "./MoviesNavigation";

const BottomTab = createBottomTabNavigator();

function AppNavigator({ loadingScreens }) {
  return (
    <BottomTab.Navigator
      tabBar={props => <TabBar {...props} loadingScreens={loadingScreens} />}
    >
      <BottomTab.Screen
        name="Movies"
        component={MoviesNavigation}
        options={{
          icon: "movie-creation",
          tabBar: {
            visible: false
          }
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          icon: "notifications-active"
        }}
      />
      <BottomTab.Screen
        name="Favorite"
        component={Favorites}
        options={{
          icon: "star"
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          icon: "person"
        }}
      />
    </BottomTab.Navigator>
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
