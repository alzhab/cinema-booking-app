// TODO Profile Stack Navigator: Profile, Edit, Language, Location, Country
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Profile, Movies, Notifications, Favorites, Theatres } from "screens";
import { connect } from "react-redux";
import { TabBar } from "organisms";

const BottomTab = createBottomTabNavigator();

function AppNavigator({ loading, loadingScreen }) {
  return (
    <BottomTab.Navigator
      tabBar={props => (
        <TabBar {...props} loading={loading} loadingScreen={loadingScreen} />
      )}
    >
      <BottomTab.Screen
        name="Movies"
        component={Movies}
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
        name="Theatres"
        component={Theatres}
        options={{
          icon: "theaters"
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          icon: "person"
        }}
      />
    </BottomTab.Navigator>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { loading, loadingScreen } = state.appReducer;

  return { loading, loadingScreen };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
